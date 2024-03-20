import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {insertUsersEmailAndPassword} from '../database/dbOperations';
import db from '../database/database';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  const handleSignup = () => {
    if (Password === confirmPassword && Password != '' && email != '') {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO Users (email,password) VALUES (?, ?)',
          [email, Password],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              ToastAndroid.show(
                'User signed up successfully',
                ToastAndroid.SHORT,
              );
              console.log(
                'User email and password add in database successfully',
              );
              navigateToLogin();
            } else {
              ToastAndroid.show('Failed to sign up', ToastAndroid.SHORT);
            }
          },
          error => {
            console.log('Error inserting record:', error);
            ToastAndroid.show('Failed to sign up', ToastAndroid.SHORT);
          },
        );
      });
    } else {
      ToastAndroid.show(
        'Password is not matched or fields are empty',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{flexGrow: 1, backgroundColor: 'rgba(249,50,9,255)'}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.child}>
            <Image
              source={require('../components/img/logo.jpg')}
              style={styles.img}
            />
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'KodeMono-Bold',
                color: 'black',
                paddingTop: 13,
              }}>
              cookaroo
            </Text>
          </View>
          <Text style={styles.header}>Complete your registration</Text>
          <View style={{paddingHorizontal: 10}}>
            <View style={{marginTop: 20}}>
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
            </View>

            <TouchableOpacity
              onPress={handleSignup}
              style={{
                padding: 4,
                backgroundColor: 'rgba(249,50,9,255)',
                borderRadius: 100,
                margin: 10,
                marginTop: 25,
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
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(249,50,9,255)',
  },
  container: {
    paddingBottom: 16,
    backgroundColor: 'white',
    margin: 20,
    marginTop: 70,
    borderRadius: 12,
  },
  img: {
    height: 65,
    width: 65,
    margin: 10,
    borderRadius: 100,
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  formfeild: {
    margin: 8,
    padding: 10,
    backgroundColor: 'rgba(236,240,245,255)',
    fontSize: 15,
    borderRadius: 10,
    height: 55,
    fontWeight: '500',
    color: 'black',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 22,
    color: 'black',
  },
});

export default SignUp;
