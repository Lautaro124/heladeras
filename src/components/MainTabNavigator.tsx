import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Watter from '../screens/Watter';
import { ScreenNames } from '../constants/screenNames';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraScreen from '../screens/CameraScreen';
import CustomTabNavigator from '../components/CustomTabNavigator';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Home}
      style={styles.container}
      screenOptions={{
        tabBarLabel: '',
      }}>
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarIcon}>
              <Icon name="home" color={color} size={26} />
              <Text>Heladeras</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Details}
        component={CameraScreen}
        options={{
          tabBarIcon: () => <CustomTabNavigator />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Watter}
        component={Watter}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarIcon}>
              <Icon name="business" color={color} size={26} />
              <Text>Tanques</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  container: {
    height: 60,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    elevation: 0,
  },
  tabBarIcon: {
    width: 70,
    alignItems: 'center',
  },
});
