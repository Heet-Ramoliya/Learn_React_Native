import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import db from '../database/database';
import {
  insertIntoCartItems,
  updateCartItem,
  deleteCartItem,
} from '../database/dbOperations';

const AllProducts = ({navigation}) => {
  const [allProduct, setAllproduct] = useState([]);
  const [storedUserId, setStoredUserId] = useState('');
  const [cartitems, setCartitems] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');

  useEffect(() => {
    getCartItems();
  }, [storedUserId, selectedProductId, cartitems]);

  // const deleteUser = () => {
  //   db.transaction(tx => {
  //     tx.executeSql('DELETE FROM Products WHERE id = 8', [], (tx, results) => {
  //       console.log('User delete successfully!');
  //     });
  //   });
  // };

  const getAllProducts = async () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Products', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          const productId = results.rows.item(i).id;
          // console.log('productId ==> ', productId);
          temp.push(results.rows.item(i));
          setAllproduct(temp);
        }
      });
    });
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

  const getUserIdFromStorage = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      console.log('UserId ==>', id);
      if (id !== null) {
        setStoredUserId(id);
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserIdFromStorage();
      getAllProducts();
    }, []),
  );

  const [count, setCount] = useState({});

  // const increase = (id, item) => {
  //   setCount(prevCounts => {
  //     const updatedCount = (prevCounts[id] || 0) + 1;
  //     const newCounts = {...prevCounts, [id]: updatedCount};
  //     insertIntoCartItems(
  //       storedUserId,
  //       selectedProductId,
  //       item.name,
  //       item.price,
  //       item.image,
  //       updatedCount,
  //     );
  //     return newCounts;
  //   });
  // };

  // const increase = async (id, item) => {
  //   console.log('------------------------------------------------');
  //   const updatedCount = (count[id] || 0) + 1;
  //   const newCounts = {...count, [id]: updatedCount};
  //   setCount(newCounts);

  //   console.log('cartitems ==> ', cartitems);

  //   const existingCartItem = cartitems.find(
  //     cartItem => cartItem.productId === item.id,
  //   );
  //   console.log('existingCartItem ==> ', existingCartItem);
  //   // console.log('cartitem id ==> ', cartitems.productId);
  //   if (existingCartItem) {
  //     // console.log('existingCartItem');
  //     updateCartItem(updatedCount, selectedProductId);
  //     const updatedCartItems = cartitems.map(cartItem =>
  //       cartItem.productId === item.id
  //         ? {...cartItem, quantity: updatedCount}
  //         : cartItem,
  //     );
  //     //console.log('updatedCartItems:', updatedCartItems);

  //     setCartitems(updatedCartItems);
  //   } else {
  //     insertIntoCartItems(
  //       storedUserId,
  //       selectedProductId,
  //       item.name,
  //       item.price,
  //       item.image,
  //       updatedCount,
  //     );
  //   }
  //   console.log('------------------------------------------------');
  // };

  const increase = async (id, item) => {
    const updatedCount = (count[id] || 0) + 1;
    const newCounts = {...count, [id]: updatedCount};
    setCount(newCounts);

    const existingCartItemIndex = cartitems.findIndex(
      cartItem => cartItem.productId === item.id,
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = cartitems.map((cartItem, index) =>
        index === existingCartItemIndex
          ? {...cartItem, quantity: updatedCount}
          : cartItem,
      );
      setCartitems(updatedCartItems);
      await updateCartItem(updatedCount, storedUserId, item.id);
      setSelectedProductId(item.id);
    } else {
      insertIntoCartItems(
        storedUserId,
        item.id,
        item.name,
        item.price,
        item.image,
        updatedCount,
      );
      setSelectedProductId(item.id);
    }
  };

  // const decrease = id => {
  //   setCount(prevCounts => {
  //     return {...prevCounts, [id]: Math.max((prevCounts[id] || 0) - 1, 0)};
  //   });

  //   setCartitems(prevCartItems => {
  //     return prevCartItems.map(cartItem =>
  //       cartItem.productId === id
  //         ? {...cartItem, quantity: Math.max((cartItem.quantity || 0) - 1, 0)}
  //         : cartItem,
  //     );
  //   });
  // };

  // const decrease = async id => {
  //   setCount(prevCounts => {
  //     const updatedCount = Math.max((prevCounts[id] || 0) - 1, 0);
  //     const newCounts = {...prevCounts, [id]: updatedCount};
  //     return newCounts;
  //   });

  //   const existingCartItemIndex = cartitems.findIndex(
  //     cartItem => cartItem.productId === id,
  //   );

  //   if (existingCartItemIndex !== -1) {
  //     const updatedCartItems = cartitems.map((cartItem, index) =>
  //       index === existingCartItemIndex
  //         ? {...cartItem, quantity: Math.max(cartItem.quantity - 1, 0)}
  //         : cartItem,
  //     );
  //     setCartitems(updatedCartItems);
  //     await updateCartItem(
  //       Math.max(cartitems[existingCartItemIndex].quantity - 1, 0),
  //       storedUserId,
  //       id,
  //     );
  //   }
  // };

  const decrease = async id => {
    setCount(prevCounts => {
      const updatedCount = Math.max((prevCounts[id] || 0) - 1, 0);
      const newCounts = {...prevCounts, [id]: updatedCount};
      return newCounts;
    });

    const existingCartItemIndex = cartitems.findIndex(
      cartItem => cartItem.productId === id,
    );

    if (existingCartItemIndex !== -1) {
      const updatedCount = Math.max(
        cartitems[existingCartItemIndex].quantity - 1,
        0,
      );
      if (updatedCount === 0) {
        const updatedCartItems = cartitems.filter(
          cartItem => cartItem.productId !== id,
        );
        setCartitems(updatedCartItems);
        await deleteCartItem(storedUserId, id);
      } else {
        const updatedCartItems = cartitems.map((cartItem, index) =>
          index === existingCartItemIndex
            ? {...cartItem, quantity: updatedCount}
            : cartItem,
        );
        setCartitems(updatedCartItems);
        await updateCartItem(updatedCount, storedUserId, id);
      }
    }
  };

  // using updatfunction
  // const decrease = async id => {
  //   setCount(prevCounts => {
  //     return {...prevCounts, [id]: Math.max((prevCounts[id] || 0) - 1, 0)};
  //   });

  //   const existingCartItem = cartitems.find(
  //     cartItem => cartItem.productId === id,
  //   );

  //   if (existingCartItem) {
  //     const updatedCount = Math.max(existingCartItem.quantity - 1, 0);
  //     const updatedCartItems = cartitems.map(cartItem =>
  //       cartItem.productId === id
  //         ? {...cartItem, quantity: updatedCount}
  //         : cartItem,
  //     );
  //     setCartitems(updatedCartItems);

  //     // Update the quantity in the database
  //     await updateCartItem(updatedCount, storedUserId, id);
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
                        increase(item.id, item);
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
                {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      insertIntoCartItems(
                        storedUserId,
                        item.name,
                        item.price,
                        item.image,
                        count[item.id] || 0,
                      );
                      navigation.navigate('AddToCart');
                    }}>
                    <Icon name="cart-plus" size={30} color="black" />
                  </TouchableOpacity>
                </View> */}
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
