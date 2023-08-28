import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../constants/screenNames';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ScreenNames.Login);
        }}>
        <Text>Go login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
