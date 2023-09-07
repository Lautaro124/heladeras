import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const googleSignin = async () => {
  try {
    GoogleSignin.configure({
      webClientId:
        '689967298809-itvua5rp4vf259p8ven9kv5o3sbt2a01.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['profile', 'email'],
    });
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredentials = await auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    await auth().signInWithCredential(googleCredentials);

    return userInfo;
  } catch (error) {
    console.error(error);
    return Alert.alert(`Ups sucedio algo: ${error}`);
  }
};
