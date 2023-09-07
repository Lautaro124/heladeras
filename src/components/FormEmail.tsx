import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/base';
import {
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../config/emailAndPassword';
import DialogPrivacity from './DialogPrivacity';

const FormEmail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isVisible, setVisible] = useState(false);

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
    <View style={styles.formContainer}>
      <Text style={styles.title}>Inicio de sesión con Gmail y contraseña</Text>
      <View style={styles.inputsContainer}>
        <Input
          errorMessage={emailError}
          style={styles.input}
          label="Email"
          placeholder="Ecriba su email.."
          keyboardType="email-address"
          onChangeText={onChangeEmail}
          labelStyle={styles.inputLabel}
          placeholderTextColor="#415A77"
        />
        <Input
          style={styles.input}
          errorMessage={passwordError}
          secureTextEntry
          label="Contraseña"
          placeholder="Ecriba su contraseña.."
          onChangeText={onChangePassword}
          labelStyle={styles.inputLabel}
          placeholderTextColor="#415A77"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.privacitiTerms}
          onPress={() => setVisible(!isVisible)}>
          <Text style={styles.textTems}>Terminos de privacidad</Text>
        </TouchableOpacity>
        <Button radius="sm" type="solid" onPress={submitSignIn}>
          Iniciar sesión
        </Button>
        <Button
          radius="sm"
          type="clear"
          color="secondary"
          onPress={submitRegister}>
          Crear cuenta
        </Button>
      </View>
      <DialogPrivacity isVisible={isVisible} setVisibility={setVisible} />
    </View>
  );
};

export default FormEmail;

const styles = StyleSheet.create({
  formContainer: {
    width: '95%',
    flex: 2.5,
    paddingVertical: '15%',
    justifyContent: 'space-evenly',
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
    color: '#0D1B2A',
    marginBottom: 50,
  },
  buttonContainer: {
    gap: 10,
    width: '100%',
  },
  inputLabel: {
    color: '#0D1B2A',
  },
  input: {
    width: '100%',
    borderColor: '#E0E1DD',
  },
  privacitiTerms: {
    paddingVertical: 15,
  },
  textTems: {
    fontSize: 15,
  },
});
