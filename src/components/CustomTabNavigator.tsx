import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomTabNavigator = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="qr-code" size={26} color="#F5FCFF" />
    </TouchableOpacity>
  );
};

export default CustomTabNavigator;

const styles = StyleSheet.create({
  container: {
    bottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#134074',
    width: 60,
    height: 60,
    borderRadius: 35,
  },
});
