import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Watter from '../screens/Watter';
import { ScreenNames } from '../constants/screenNames';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          tabBarLabel: 'Heladeras',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Watter}
        component={Watter}
        options={{
          tabBarLabel: 'Tanques de agua',
          tabBarIcon: ({ color }) => (
            <Icon name="business" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
