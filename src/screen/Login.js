import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState(true);

  const showPasswordonInputField = () => {
    setShowpassword(!showpassword);
  };

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const storeData = JSON.parse(userData);
        if (storeData.email === email && storeData.password === password) {
          await AsyncStorage.setItem('sessionToken', '12345');
          navigation.navigate('DrawerNavigators');
        } else if (email === '') {
          ToastAndroid.show(
            'Please enter email address',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
        } else if (password === '') {
          ToastAndroid.show(
            'Please enter password ',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
        } else {
          ToastAndroid.show(
            'Invalid email or password',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
        }
      } else {
        ToastAndroid.show(
          'No user data found. Please sign up first.',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const ForgatePassword = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('sessionToken');
    } catch (error) {
      console.error(error);
    }
  };

  const navigateForget = () => {
    navigation.navigate('ForgotPage');
  };

  const FinalForgatePassword = () => {
    ForgatePassword();
    navigateForget();
  };

  const navigateLogin = () => {
    navigation.navigate('SignupPage');
  };

  // <View style={{flex: 1, justifyContent: 'center'}}>
  //   <View>
  //     <Text style={styles.heading}>Login</Text>

  //     <View style={{paddingHorizontal: 15}}>
  //       <TextInput
  //         placeholder="Email"
  //         placeholderTextColor="black"
  //         style={styles.formfeild}
  //         value={email}
  //         onChangeText={text => setEmail(text)}
  //       />
  //       <TextInput
  //         placeholder="Password"
  //         placeholderTextColor="black"
  //         style={styles.formfeild}
  //         value={password}
  //         onChangeText={text => setPassword(text)}
  //         secureTextEntry={true}
  //       />
  //       <TouchableOpacity style={{padding: 4}} onPress={ForgatePassword}>
  //         <Text style={{fontSize: 18, color: 'blue', textAlign: 'center'}}>
  //           Forgate Password?
  //         </Text>
  //       </TouchableOpacity>

  //       <TouchableOpacity
  //         onPress={handleLogin}
  //         style={{
  //           padding: 4,
  //           backgroundColor: 'blue',
  //           borderRadius: 100,
  //           margin: 10,
  //         }}>
  //         <Text
  //           style={{
  //             fontSize: 18,
  //             color: 'white',
  //             textAlign: 'center',
  //             padding: 5,
  //             fontWeight: '600',
  //           }}>
  //           Login
  //         </Text>
  //       </TouchableOpacity>
  //     </View>

  //     <View style={styles.oneLine}>
  //       <Text>Don't have an account?</Text>
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate('SignupPage');
  //         }}
  //         style={{padding: 4}}>
  //         <Text style={{fontSize: 18, color: 'blue'}}>Signup</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // </View>
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
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.formfeild}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={showpassword}
              />
            </View>

            <TouchableOpacity
              onPress={showPasswordonInputField}
              style={{width: '60%', paddingHorizontal: 10, marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderRadius: 25,
                  alignItems: 'center',
                }}>
                <Icon name="eye" size={18} style={{padding: 5}} color="black" />
                <Text
                  style={{
                    padding: 5,
                    color: 'black',
                    fontSize: 15,
                    fontWeight: '400',
                  }}>
                  {showpassword ? 'Show' : 'Hide'} Password
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogin}
              style={{
                padding: 4,
                backgroundColor: 'rgba(249,50,9,255)',
                borderRadius: 100,
                margin: 10,
                marginTop: 35,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  padding: 7,
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 4,
                  marginTop: 10,
                  width: '60%',
                  borderRadius: 80,
                  backgroundColor: 'rgba(236,240,245,255)',
                }}
                onPress={FinalForgatePassword}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    textAlign: 'center',
                    padding: 2,
                  }}>
                  Forgate Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupPage')}
          style={{
            paddingHorizontal: 10,
            backgroundColor: 'white',
            width: '90%',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            marginTop: 5,
            borderRadius: 30,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              textAlign: 'center',
              padding: 10,
              fontWeight: '500',
            }}>
            Register a new account here!
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  // formfeild: {
  //   borderWidth: 2,
  //   margin: 8,
  //   padding: 10,
  // },
  // heading: {
  //   fontSize: 32,
  //   fontWeight: '800',
  //   color: 'black',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   marginTop: 20,
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
    backgroundColor: 'white',
    margin: 20,
    marginTop: 70,
    borderRadius: 12,
    paddingBottom: 16,
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
});

export default Login;
