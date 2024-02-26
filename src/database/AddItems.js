import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePickerTask from '../components/ImagePicker';
import {createTable, insertUser} from '../database/dbOperations';

const AddItems = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgURL, setImgURL] = useState('');

  const addItemInDatabase = () => {
    insertUser(name, price, imgURL);
    navigationtohome();
  };

  const handleImageSelect = imageUri => {
    setImgURL(imageUri);
  };

  const navigationtohome = () => {
    navigation.navigate('welcomePage');
  };

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
      <ImagePickerTask onImageSelected={handleImageSelect} />

      <TouchableOpacity
        onPress={addItemInDatabase}
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
