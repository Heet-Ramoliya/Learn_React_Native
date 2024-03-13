import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToCart = ({navigation, route}) => {
  const {name, price, image, quantity} = route.params;
  console.log('name ==>', name);
  console.log('price ==>', price);
  console.log('image ==>', image);
  console.log('quantity ==>', quantity);

  return (
    <View>
      <View style={styles.itemContainer}>
        {image && <Image source={{uri: image}} style={styles.image} />}
        <View style={styles.itemInfo}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Price: ₹{price}</Text>
          <Text style={styles.text}>Quantity: {quantity}</Text>
        </View>
      </View>
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
