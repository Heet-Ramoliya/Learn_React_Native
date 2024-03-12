import {useEffect, useState} from 'react';
import {View, Text, SectionList, Image, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createTable, insertUser} from '../database/dbOperations';
import db from '../database/database';

const AllProducts = ({navigation, route}) => {
  const [allProduct, setAllproduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Products', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          setAllproduct(temp);
        }
        setMenulist(temp);
      });
    });
  };

  const [count, setCount] = useState({});

  const increase = id => {
    setCount(prevCounts => {
      return {...prevCounts, [id]: (prevCounts[id] || 0) + 1};
    });
  };

  const decrease = id => {
    setCount(prevCounts => {
      return {...prevCounts, [id]: Math.max((prevCounts[id] || 0) - 1, 0)};
    });
  };

  // const addToCart = async item => {
  //   try {
  //     const existingItems = await AsyncStorage.getItem('cartItems');
  //     console.log('existingItems ==> ', existingItems);
  //     var cartdata = [];

  //     if (existingItems) {
  //       cartdata = JSON.parse(existingItems);
  //       console.log('cartdata ==> ', cartdata);
  //     }
  //     cartdata.push(item);
  //     console.log('after push ==> ', cartdata);
  //     await AsyncStorage.setItem('cartItems', JSON.stringify(cartdata));
  //   } catch (error) {
  //     console.log('Error storing item to cart:', error);
  //   }
  // };

  return (
    <View>
      <FlatList
        data={allProduct}
        renderItem={({item}) => (
          <>
            <View>
              <View style={styles.container}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 120,
                      width: 120,
                      borderRadius: 20,
                    }}
                  />
                </View>
                <View style={styles.text_container}>
                  <Text style={styles.pname}>{item.name}</Text>
                  <Text style={styles.price}>₹{item.price}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 5,
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => decrease(item.id)}
                      style={styles.button}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          padding: 5,
                          fontSize: 18,
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        height: 50,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                        marginLeft: 7,
                        marginRight: 7,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          fontSize: 18,
                        }}>
                        {count[item.id] || 0}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        increase(item.id);
                      }}
                      style={styles.button}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          padding: 5,
                          fontSize: 18,
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('AddToCart', {name: 'heet'});
                    }}>
                    <Icon name="cart-plus" size={30} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
  },
  text_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: '50%',
    marginLeft: 20,
  },
  pname: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 5,
  },
  button: {
    height: 50,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    backgroundColor: 'rgba(236,240,245,255)',
  },
});

export default AllProducts;
