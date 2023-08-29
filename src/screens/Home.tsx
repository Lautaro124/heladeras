import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import Header from '../components/Header';
import app from '../config/firebase';
import { Freeze, FreezeType } from '../interface/freeze';
import Section from '../components/Section';
import { getHotFreeze } from '../utils/getHotFreeze';

const Home = () => {
  const [freezes, setFreezes] = useState<FreezeType>({
    json: [],
  });
  const [hotFreezes, setHotFreezes] = useState<Freeze[]>([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbReference = ref(database, 'test');
    onValue(dbReference, snapshot => {
      const value: FreezeType = snapshot.val();
      setFreezes(value);
      setHotFreezes(getHotFreeze(value.json));
    });
  }, []);

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
