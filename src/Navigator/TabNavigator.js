import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SectionList_task from '../screen/allProducts';
import Menu from '../screen/Menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyProduct from '../screen/myProduct';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({navigation, route}) => {
  // const {userId} = route.params;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{title: 'All Products'}}
      />
      <Tab.Screen
        name="myProduct"
        component={MyProduct}
        options={{title: 'My Product'}}
        // initialParams={{userId: userId}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
