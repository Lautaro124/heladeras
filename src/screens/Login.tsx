import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';
import { Button } from '@rneui/themed';
import { googleSignin } from '../config/googleSignIn';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const signInWithGoogle = async () => {
    const user = await googleSignin();

    if (user) {
      navigation.navigate(ScreenNames.Home);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        radius="sm"
        type="outline"
        onPress={() => {
          signInWithGoogle();
        }}>
        Iniciar secion con google
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
