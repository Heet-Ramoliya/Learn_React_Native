import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../database/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {insertIntoMyorders, insertPayment} from '../database/dbOperations';

const Invoice = ({navigation}) => {
  const [storedUserId, setStoredUserId] = useState('');
  const [cartitems, setCartitems] = useState([]);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    getUserIdFromStorage();
    getCartItems();
    getemail();
  }, [storedUserId, cartitems, email]);

  const getUserIdFromStorage = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      if (id !== null) {
        setStoredUserId(id);
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
  };

  const getCartItems = async () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM CartItems where userId=?',
        [storedUserId],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setCartitems(temp);
        },
      );
    });
  };

  const getemail = async () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Users WHERE userId=?',
        [storedUserId],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setEmail(temp);
        },
      );
    });
  };

  let total = 0;
  cartitems.forEach(item => {
    total += item.price * item.quantity;
  });

  const invoiceData = {
    invoiceNumber: '1',
    customerName: 'Heet Ramoliya',
    customerAddress: 'Ahmedabad',
  };

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Invoice</Text>
        </View>
        <View style={styles.invoiceInfoContainer}>
          <View style={styles.invoiceInfo}>
            <Text style={styles.label}>Invoice Number:</Text>
            <Text style={styles.text}>{invoiceData.invoiceNumber}</Text>
          </View>
          <View style={styles.invoiceInfo}>
            <Text style={styles.label}>Invoice Date:</Text>
            <Text style={styles.text}>{formattedDate}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.customerInfoContainer}>
          <Text style={styles.subtitle}>Customer Information</Text>
          <View style={styles.customerInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{invoiceData.customerName}</Text>
          </View>
          {email.map((user, index) => (
            <View key={index}>
              <View style={styles.customerInfo}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{user.email}</Text>
              </View>
            </View>
          ))}
          <View style={styles.customerInfo}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.text}>{invoiceData.customerAddress}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemsContainer}>
          <Text style={styles.subtitle}>Invoice Items</Text>
          {cartitems.map((item, index) => (
            <View style={styles.item} key={item.id}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>
                {item.quantity} x ₹{item.price}
              </Text>
              <Text style={styles.itemTotal}>
                ₹{item.quantity * item.price}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.divider} />
        <View style={styles.totalContainer}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            Total:
          </Text>
          <Text style={styles.total}> ₹{total}</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              cartitems.forEach(item => {
                insertIntoMyorders(
                  storedUserId,
                  item.name,
                  item.price,
                  item.image,
                  item.quantity,
                  formattedDate,
                );
                navigation.navigate('DrawerNavigators');
              });
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
                fontWeight: '500',
                padding: 8,
              }}>
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  invoiceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    marginTop: 20,
  },
  customerInfo: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
  },
  itemDetails: {
    color: 'black',
  },
  itemTotal: {
    fontWeight: 'bold',
    color: 'black',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  btn: {
    backgroundColor: 'black',
    margin: 5,
    padding: 5,
    borderRadius: 100,
    marginTop: 35,
  },
});

export default Invoice;
