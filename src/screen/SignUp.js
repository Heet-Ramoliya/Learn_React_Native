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

  const handleSignup = () => {
    if (Password === confirmPassword && Password != '' && email != '') {
      storeDate();
      showData();
      navigateToLogin();
    } else {
      ToastAndroid.show(
        'password is not match',
        ToastAndroid.TOP,
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    // <View style={{flex: 1, justifyContent: 'center'}}>
    //   <Text style={styles.heading}>Signup</Text>

    //   <View style={{paddingHorizontal: 15}}>
    //     <TextInput
    //       placeholder="Email"
    //       placeholderTextColor="black"
    //       style={styles.formfeild}
    //       value={email}
    //       onChangeText={text => setEmail(text)}
    //     />
    //     <TextInput
    //       placeholder="Create password"
    //       placeholderTextColor="black"
    //       style={styles.formfeild}
    //       value={Password}
    //       onChangeText={text => setPassword(text)}
    //     />
    //     <TextInput
    //       placeholder="Confirm password"
    //       placeholderTextColor="black"
    //       style={styles.formfeild}
    //       value={confirmPassword}
    //       onChangeText={text => setConfirmPassword(text)}
    //     />
    //     <TouchableOpacity
    //       // onPress={() => {
    //       //   Password === confirmPassword && Password != "" && email != "null"
    //       //     ? allFunction()
    //       //     : ToastAndroid.show(
    //       //         'password is not match',
    //       //         ToastAndroid.SHORT,
    //       //         ToastAndroid.TOP,
    //       //       );
    //       // }}
    //       onPress={handleSignup}
    //       style={{
    //         padding: 4,
    //         backgroundColor: 'blue',
    //         borderRadius: 100,
    //         margin: 10,
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 18,
    //           color: 'white',
    //           textAlign: 'center',
    //           padding: 5,
    //           fontWeight: '600',
    //         }}>
    //         Sign Up
    //       </Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View style={styles.oneLine}>
    //     <Text>Already have an account?</Text>
    //     <TouchableOpacity
    //       style={{padding: 4}}
    //       onPress={() => {
    //         navigation.navigate('LoginPage');
    //       }}>
    //       <Text style={{fontSize: 18, color: 'blue'}}>Login</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
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
  // formfeild: {
  //   borderWidth: 2,
  //   margin: 8,
  //   padding: 11,
  // },
  // heading: {
  //   fontSize: 32,
  //   fontWeight: '800',
  //   color: 'black',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   padding: 18,
  // },
  // oneLine: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
