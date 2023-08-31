import { StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';
import { Button, Divider } from '@rneui/themed';
import { googleSignin } from '../config/googleSignIn';
import FormEmail from '../components/FormEmail';
import GoogleLogo from '../assets/logo-google.png';

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
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <FormEmail />
      <View style={styles.dividerContainer}>
        <Divider />
      </View>
      <View style={styles.socialLoginContainer}>
        <Button
          radius="sm"
          color="secondary"
          type="outline"
          onPress={() => {
            signInWithGoogle();
          }}>
          <Image
            source={GoogleLogo}
            style={styles.image}
            resizeMode="stretch"
          />
          Iniciar sesión con google{' '}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  dividerContainer: {
    width: '80%',
    height: 10,
    marginVertical: 20,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  socialLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
