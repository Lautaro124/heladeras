import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';
import { Button, Divider } from '@rneui/themed';
import { googleSignin } from '../config/googleSignIn';
import { Input } from '@rneui/base';

import {
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../config/emailAndPassword';

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const signInWithGoogle = async () => {
    const user = await googleSignin();

    if (user) {
      navigation.navigate(ScreenNames.Home);
    }
  };
  const userIsCorrect = () =>
    emailError.length === 0 && passwordError.length === 0;

  const onChangeEmail = (text: string) => {
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(text)) {
      setEmailError('El email no cumple con el formato solicitado');
      return;
    }
    setEmailError('');
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    if (text.length <= 5) {
      setPasswordError('La constasena tiene menos de 6 caracteres');
      return;
    }
    setPasswordError('');
    setPassword(text);
  };

  const submitSignIn = () => {
    if (!userIsCorrect()) {
      return;
    }
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(ScreenNames.Home);
      })
      .catch(error => {
        setPasswordError(error.message);
      });
  };
  const submitRegister = () => {
    if (!userIsCorrect()) {
      return;
    }
    registerWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(ScreenNames.Home);
      })
      .catch(error => {
        setPasswordError(error.message);
      });
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Inicio de secion con Gmail y contraseña
        </Text>
        <View style={styles.inputsContainer}>
          <Input
            errorMessage={emailError}
            label="Email"
            placeholder="Ecriba su email.."
            keyboardType="email-address"
            onChangeText={onChangeEmail}
          />
          <Input
            errorMessage={passwordError}
            secureTextEntry
            label="Contraseña"
            placeholder="Ecriba su contraseña.."
            onChangeText={onChangePassword}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button radius="sm" type="solid" onPress={submitSignIn}>
            Iniciar secion
          </Button>
          <Button
            radius="sm"
            type="solid"
            color="secondary"
            onPress={submitRegister}>
            Registrar
          </Button>
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <Divider />
      </View>
      <View style={styles.socialLoginContainer}>
        <Button
          radius="sm"
          type="outline"
          onPress={() => {
            signInWithGoogle();
          }}>
          Iniciar secion con google
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
  formContainer: {
    width: '95%',
    flex: 4,
    paddingTop: 15,
    justifyContent: 'space-evenly',
  },
  socialLoginContainer: {
    flex: 2,
  },
  inputsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 20,
    width: '100%',
  },
});
