import { StyleSheet, View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Freeze, FreezeType } from '../interface/freeze';
import Section from '../components/Section';
import { getHotFreeze } from '../utils/getHotFreeze';
import database, {
  type FirebaseDatabaseTypes,
} from '@react-native-firebase/database';
import { Divider } from '@rneui/themed';

const Home = () => {
  const [freezes, setFreezes] = useState<FreezeType>({
    json: [],
  });
  const [hotFreezes, setHotFreezes] = useState<Freeze[]>([]);
  const reference = database().ref('/test');

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const handleSnapshot = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const value: FreezeType = snapshot.val();
        console.log(value);
        setFreezes(value);
        setHotFreezes(getHotFreeze(value.json));
      }, 500);
    };

    reference.on('value', handleSnapshot);

    return () => {
      reference.off('value', handleSnapshot);
      clearTimeout(timeoutId);
    };
  }, [reference]);

  return (
    <View style={styles.container}>
      <Header freezes={hotFreezes} />
      <View style={styles.dividerContainer}>
        <Divider />
        <Text style={styles.dividerTitle}>Todas las herladeras</Text>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            {freezes.json.map(freeze => (
              <Section key={freeze!.name} {...freeze} />
            ))}
          </View>
        </ScrollView>
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
  dividerContainer: {
    width: '90%',
    gap: 2,
    marginTop: 1,
  },
  bottomContainer: {
    flex: 5,
    width: '100%',
    padding: 5,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    width: '100%',
    height: '100%',
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
