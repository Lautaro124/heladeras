import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';

type Props = NativeStackScreenProps<RootStackParams, ScreenNames.Details>;

const FreezeDetail = ({ route, navigation }: Props) => {
  const { name, section, dependencia } = route.params;

  const goHome = () => {
    navigation.navigate(ScreenNames.Home);
  };

  return (
    <View>
      <Text>Nombre {name}</Text>
      <Text>
        Seccion {section} - {dependencia}
      </Text>
      <TouchableOpacity onPress={goHome}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FreezeDetail;
