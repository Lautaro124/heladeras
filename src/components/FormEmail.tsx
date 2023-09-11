import { TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../enum/screenNames';
import { Button, makeStyles, Text, Input } from '@rneui/themed';
import {
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '../config/emailAndPassword';
import DialogPrivacity from './DialogPrivacity';

const useStyle = makeStyles(theme => ({
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
    gap: theme.spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
    width: '100%',
  },
  input: {
    width: '100%',
  },
  privacitiTerms: {
    paddingVertical: theme.spacing.lg,
  },
  textTems: {
    fontSize: 15,
  },
}));

const FormEmail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isVisible, setVisible] = useState(false);
  const styles = useStyle();

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
          leftIcon={{
            name: 'email',
            color: 'gray',
            type: 'Ionicons',
          }}
          placeholder="Ecriba su email..."
          keyboardType="email-address"
          onChangeText={onChangeEmail}
        />
        <Input
          style={styles.input}
          errorMessage={passwordError}
          secureTextEntry
          leftIcon={{
            name: 'password',
            type: 'Ionicons',
            color: 'gray',
          }}
          label="Contraseña"
          placeholder="Ecriba su contraseña..."
          onChangeText={onChangePassword}
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
