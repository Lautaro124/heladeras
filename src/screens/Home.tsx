import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../constants/screenNames';
import app from '../config/firebase';
import { FreezeType } from '../interface/freeze';
import Section from '../components/Section';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [freezes, setFreezes] = useState<FreezeType>({
    json: [],
  });

  useEffect(() => {
    const database = getDatabase(app);
    const dbReference = ref(database, 'test');
    onValue(dbReference, snapshot => {
      const value: FreezeType = snapshot.val();
      setFreezes(value);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ScreenNames.Login);
          }}>
          <Text>Go login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        {freezes.json.map(freeze => (
          <Section key={freeze!.name} {...freeze} />
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778DA9',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E1DD',
    width: '100%',
  },
  bottomContainer: {
    flex: 5,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    gap: 5,
  },
});
