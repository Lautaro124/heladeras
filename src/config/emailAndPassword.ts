import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return Alert.alert(`Ups sucedio algo: ${error}`);
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return Alert.alert(`Ups sucedio algo: ${error}`);
  }
};
