import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from '../database/database';

const AddToCart = () => {
  const [cartitems, setCartitems] = useState([]);
  const [storedUserId, setStoredUserId] = useState('');

  useEffect(() => {
    getUserIdFromStorage();
    getCartItems();
  }, [storedUserId]);

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

  return (
    <View>
      {cartitems.length == 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 18, textAlign: 'center'}}>
            Cart is empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartitems}
          renderItem={({item}) => (
            <View>
              <View style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.itemInfo}>
                  <Text style={styles.text}>Name: {item.name}</Text>
                  <Text style={styles.text}>Price: ₹{item.price}</Text>
                  <Text style={styles.text}>Quantity: {item.quantity}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'rgba(236,240,245,255)',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 20,
    margin: 20,
  },
  itemInfo: {
    flexDirection: 'column',
    padding: 5,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});

export default AddToCart;
