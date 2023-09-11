import { View, KeyboardAvoidingView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../enum/screenNames';
import { Button, Divider } from '@rneui/themed';
import { googleSignin } from '../config/googleSignIn';
import FormEmail from '../components/FormEmail';
import GoogleLogo from '../assets/logo-google.png';
import { makeStyles } from '@rneui/themed';
import { setUser } from '../redux/slices/user';
import { useDispatch } from 'react-redux';

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    width: '100%',
    padding: theme.spacing.sm,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  dividerContainer: {
    width: '85%',
    height: theme.spacing.sm,
    marginVertical: theme.spacing.sm,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: theme.spacing.lg,
  },
  socialLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const styles = useStyle();

  const signInWithGoogle = async () => {
    const googleCredentials = await googleSignin();

    if (googleCredentials) {
      dispatch(
        setUser({
          uuid: googleCredentials.user.id,
          name: googleCredentials.user.name,
          email: googleCredentials.user.email,
          avatarUrl: googleCredentials.user.photo,
        }),
      );
      navigation.navigate(ScreenNames.TabNavigation);
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
