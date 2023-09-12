import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Watter from '../screens/Watter';
import { ScreenNames } from '../enum/screenNames';
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
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        backgroundColor: '#2C2B3C',
      }}
      screenOptions={{
        tabBarColor: '#2C2B3C',
        tabBarLabel: '',
      }}>
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Icon
                name="home"
                color={focused ? '#232323' : '#E9E3E6'}
                size={26}
              />
              <Text style={styles.label}>Heladeras</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Camera}
        component={CameraScreen}
        options={{
          tabBarIcon: () => <CustomTabNavigator />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Watter}
        component={Watter}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Icon
                name="business"
                color={focused ? '#232323' : '#E9E3E6'}
                size={26}
              />
              <Text style={styles.label}>Tanques</Text>
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
  label: {
    color: '#fff',
  },
});
