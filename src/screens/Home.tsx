import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Freeze, FreezeType } from '../interface/freeze';
import Section from '../components/Section';
import { getHotFreeze } from '../utils/getHotFreeze';
import database from '@react-native-firebase/database';

const Home = () => {
  const [freezes, setFreezes] = useState<FreezeType>({
    json: [],
  });
  const [hotFreezes, setHotFreezes] = useState<Freeze[]>([]);
  const reference = database().ref('/test');

  useEffect(() => {
    reference.once('value').then(snapshot => {
      const value: FreezeType = snapshot.val();
      setFreezes(value);
      setHotFreezes(getHotFreeze(value.json));
    });
  }, [reference]);

  return (
    <View style={styles.container}>
      <Header freezes={hotFreezes} />
      <Text style={styles.dividerTitle}>Todas las herladeras</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingTop: 10,
  },
  dividerTitle: {
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0D1B2A',
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
