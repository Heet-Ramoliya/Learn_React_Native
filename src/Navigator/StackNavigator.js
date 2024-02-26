import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import Home from '../screen/home';
import SignUp from '../screen/SignUp';
import Login from '../screen/Login';
import Welcome from '../screen/welcome';
import DrawerNavigators from './DrawerNavigator';
import ForgotScreen from '../screen/Forgot';
import Menu from '../screen/Menu';
import AddItems from '../database/AddItems';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="homePage"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DrawerNavigators"
          component={DrawerNavigators}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignupPage"
          component={SignUp}
          options={{
            title: 'Sign Up',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            title: 'Login',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="welcomePage"
          component={Welcome}
          options={{
            title: 'WelcomePage',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPage"
          component={ForgotScreen}
          options={{
            title: 'Forgot Password',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Menu',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddItems"
          component={AddItems}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
