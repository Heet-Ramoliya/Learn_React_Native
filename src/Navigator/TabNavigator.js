import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyProduct from '../screen/myProduct';
import AllProducts from '../screen/AllProducts';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllProducts"
        component={AllProducts}
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
