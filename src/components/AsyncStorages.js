import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userData = {
    email: email,
    password: Password,
  };

  const storeDate = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch {
      error => {
        console.log(error);
      };
    }
  };

  const showData = async () => {
    try {
      const jsonvalue = await AsyncStorage.getItem('userData');
      alldata = jsonvalue != null ? JSON.parse(jsonvalue) : null;
      console.log('Stored Data:', alldata);
      return alldata;
    } catch {
      error => {
        console.log(error);
      };
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  const allFunction = () => {
    storeDate();
    showData();
    navigateToLogin();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.heading}>Signup</Text>

      <View style={{paddingHorizontal: 15}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style={styles.formfeild}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Create password"
          placeholderTextColor="black"
          style={styles.formfeild}
          value={Password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor="black"
          style={styles.formfeild}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <TouchableOpacity
          onPress={() => {
            Password === confirmPassword
              ? allFunction()
              : ToastAndroid.show(
                  'password is not match',
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP,
                );
          }}
          style={{
            padding: 4,
            backgroundColor: 'blue',
            borderRadius: 100,
            margin: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              padding: 5,
              fontWeight: '600',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.oneLine}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={{padding: 4}}
          onPress={() => {
            navigation.navigate('LoginPage');
          }}>
          <Text style={{fontSize: 18, color: 'blue'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formfeild: {
    borderWidth: 2,
    margin: 8,
    padding: 11,
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 18,
  },
  oneLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
