import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="login" component={Login_task} />
        <Tab.Screen name="signUp" component={Signup_task} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login_task = () => {
  return (
    <View>
      <Text>Login_task</Text>
    </View>
  );
};

const Signup_task = () => {
  return (
    <View>
      <Text>signup_task</Text>
    </View>
  );
};

export default BottomTabNavigator;
