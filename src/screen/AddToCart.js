import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToCart = ({navigation, route}) => {
  const [cartItem, setCartItems] = useState([]);

  const {name} = route.params;
  console.log(name);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const items = await AsyncStorage.getItem('cartItems');
      if (items !== null) {
        setCartItems(JSON.parse(items));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // let listItemView = ({item}) => {
  //   return (
  //     <>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           borderWidth: 1,
  //           marginHorizontal: 5,
  //           margin: 5,
  //           backgroundColor: 'rgba(236,240,245,255)',
  //         }}>
  //         {item.image && (
  //           <Image
  //             source={{
  //               uri: item.image,
  //             }}
  //             style={{
  //               height: 100,
  //               width: 100,
  //               resizeMode: 'cover',
  //               borderRadius: 20,
  //               margin: 20,
  //             }}
  //           />
  //         )}
  //         <View style={{flexDirection: 'column', padding: 5}}>
  //           <Text style={styles.text}>Name: {item.name}</Text>
  //           <Text style={styles.text}>Price: ₹{item.price}</Text>
  //         </View>
  //       </View>
  //     </>
  //   );
  // };

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        {item.image && (
          <Image source={{uri: item.image}} style={styles.image} />
        )}
        <View style={styles.itemInfo}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Price: ₹{item.price}</Text>
        </View>
      </View>
    );
  };

  if (!cartItem || cartItem.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No items in cart</Text>
      </View>
    );
  }

  return (
    // <View style={styles.container}>
    //   <FlatList
    //     data={cartItem}
    //     renderItem={renderCartItem}
    //     keyExtractor={(item, index) => index.toString()}
    //   />
    // </View>
    <Text
      style={{
        flex: 1,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
      }}>
      Add to Cart
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});

export default AddToCart;
