import { TouchableOpacity, View } from 'react-native';
import { Text, makeStyles, useTheme } from '@rneui/themed';
import React from 'react';
import { Freeze } from '../interface/freeze';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from '../enum/screenNames';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing.sm,
    borderRadius: 3,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  touchableContainer: {
    width: '49%',
    height: 128,
  },
  text: {
    width: '100%',
    textAlign: 'left',
    fontSize: 13,
    color: theme.colors.secondary,
    top: theme.spacing.sm,
    left: theme.spacing.sm,
    position: 'absolute',
    fontWeight: '400',
  },
  place: {
    color: theme.colors.secondary,
    position: 'absolute',
    bottom: theme.spacing.sm,
    right: theme.spacing.sm,
    fontSize: 13,
    fontWeight: '400',
  },
  titleC: {
    fontSize: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

const Section = ({
  name,
  status,
  dependencia,
  floor,
  ...restOfProps
}: Freeze) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const temperature = parseInt(status, 10);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const isDangerous = temperature >= 10;
  const styleContainer = {
    backgroundColor: isDangerous ? theme.colors.error : theme.colors.primary,
    ...styles.container,
  };

  const goToDetails = () => {
    navigation.navigate(ScreenNames.Details, {
      name,
      status,
      dependencia,
      floor,
      ...restOfProps,
    });
  };

  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={goToDetails}>
      <View style={styleContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.title}>{temperature}°</Text>
        <Text style={styles.place}>
          {floor} - {dependencia}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Section;
