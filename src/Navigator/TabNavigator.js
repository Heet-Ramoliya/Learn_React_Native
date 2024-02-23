import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SectionList_task from '../components/SectionList';
import Menu from '../screen/Menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
};

const Order = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 20}}>Order</Text>
    </View>
  );
};

export default TabNavigator;
