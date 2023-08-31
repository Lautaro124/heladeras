import auth from '@react-native-firebase/auth';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    return undefined;
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    return undefined;
  }
};
