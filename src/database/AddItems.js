import {View, Text, TextInput, StyleSheet, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePickerTask from '../components/ImagePicker';
import {insertProduct} from '../database/dbOperations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from './database';

const AddItems = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [storedUserId, setStoredUserId] = useState('');

  useEffect(() => {
    const getUserIdFromStorage = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        if (id !== null) {
          setStoredUserId(id);
        }
        setName('');
        setPrice('');
        setImgURL('');
      } catch (error) {
        console.error('Error retrieving userId from AsyncStorage:', error);
      }
    };

    getUserIdFromStorage();
  }, [storedUserId]);

  // const {itemid, mode, itemname, itemprice, itemimage} = route.params || {
  //   itemid: null,
  //   mode: 'add',
  // };
  // const isEditMode = mode === 'update';

  // useEffect(() => {
  //   if (isEditMode || itemid) {
  //     setName(itemname);
  //     setPrice(itemprice);
  //     setImgURL(itemimage);
  //   }
  // }, [itemid]);

  const handleSubmit = async () => {
    insertProduct(storedUserId, name, price, imgURL);
    navigation.navigate('myProduct');
    setName('');
    setPrice('');
    setImgURL('');
    // if (isEditMode) {
    //   updateUser(name, price, imgURL, itemid);
    //   setName('');
    //   setPrice('');
    //   setImgURL('');
    //   navigation.navigate('FlatList', {mode: 'add'});
    // } else {
    //   insertUser(name, price, imgURL);
    //   // setName('');
    //   // setPrice('');
    //   // setImgURL('');
    //   navigation.navigate('FlatList');
    // }
  };

  // const addItemInDatabase = () => {
  //   insertUser(name, price, imgURL);
  //   navigationtohome();
  // };

  const handleImageSelect = imageUri => {
    setImgURL(imageUri);
  };

  // const updateDataInDatabase = () => {
  //   updateUser(itemname, itemprice, itemid);
  //   navigationtohome();
  // };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
      }}>
      <View>
        <TextInput
          style={styles.formfeild}
          placeholder="name"
          placeholderTextColor="black"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.formfeild}
          placeholder="price"
          placeholderTextColor="black"
          value={price}
          onChangeText={text => setPrice(text)}
        />
      </View>
      <ImagePickerTask onImageSelect={handleImageSelect} />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          paddingHorizontal: 10,
          backgroundColor: 'black',
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          marginTop: 5,
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            textAlign: 'center',
            padding: 10,
            fontWeight: '500',
          }}>
          Submit
          {/* {isEditMode ? 'Update' : 'Add'} */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formfeild: {
    margin: 8,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    height: 55,
    fontWeight: '500',
    color: 'black',
    borderWidth: 0.5,
  },
});

export default AddItems;
