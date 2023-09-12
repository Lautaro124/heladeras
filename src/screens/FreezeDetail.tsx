import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../enum/screenNames';
import { Button, Divider, makeStyles, Text } from '@rneui/themed';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 10,
    backgroundColor: theme.colors.background,
  },
  divider: {
    width: 0.5,
    height: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
  },
  dataContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    textAlign: 'left',
  },
  section: {
    width: '47%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 25,
  },
}));

type Props = NativeStackScreenProps<RootStackParams, ScreenNames.Details>;

const FreezeDetail = ({ route, navigation }: Props) => {
  const style = useStyles();
  const { name, section, dependencia, floor, status, time } = route.params;

  const goHome = () => {
    navigation.navigate(ScreenNames.Home);
  };

  const getDate = () => {
    const date = new Date(time);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.title}>{getDate()}</Text>
      </View>
      <View style={style.dataContainer}>
        <View style={style.headerContainer}>
          <Text style={style.title}>Estado y lugar</Text>
        </View>
        <View style={style.section}>
          <Text style={style.status}>{status}°</Text>
        </View>
        <Divider orientation="vertical" style={style.divider} />
        <View style={style.section}>
          <Text style={style.text}>{floor}</Text>
          <Text style={style.text}>{section}</Text>
          <Text style={style.text}>{dependencia}</Text>
        </View>
      </View>
      <View style={style.buttonContainer}>
        <Button title="Home" onPress={goHome} />
      </View>
    </View>
  );
};

export default FreezeDetail;
