import { View, ScrollView } from 'react-native';
import { Button, Text, makeStyles } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Freeze, FirebasetData } from '../interface/freeze';
import Section from '../components/Section';
import database, {
  type FirebaseDatabaseTypes,
} from '@react-native-firebase/database';
import { getHotFreeze } from '../utils/getHotFreeze';

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.md,
  },
  dividerTitle: {
    paddingVertical: theme.spacing.md,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dividerContainer: {
    width: '100%',
    paddingHorizontal: theme.spacing.md,
    gap: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 5,
    width: '100%',
    padding: theme.spacing.sm,
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    width: '100%',
    height: '100%',
    gap: theme.spacing.sm,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

const Home = () => {
  const styles = useStyle();
  const [freezes, setFreezes] = useState<Freeze[]>([]);
  const [canSeeAllFreeze, setCanSeeAllFreeze] = useState(false);
  const reference = database().ref('/test');

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const handleSnapshot = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const value: FirebasetData = snapshot.val();
        if (value.json) {
          setFreezes(getHotFreeze(value.json, canSeeAllFreeze));
        }
      }, 500);
    };

    reference.on('value', handleSnapshot);

    return () => {
      reference.off('value', handleSnapshot);
      clearTimeout(timeoutId);
    };
  }, [canSeeAllFreeze, reference]);

  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerTitle}>
          {canSeeAllFreeze ? 'Todas las heladeras' : 'Heladeras calientes'}
        </Text>
        <Button
          onPress={() => {
            setCanSeeAllFreeze(!canSeeAllFreeze);
          }}
          type="clear"
          title={canSeeAllFreeze ? 'Solo errores' : 'Mostrar todos'}
        />
      </View>
      <View style={styles.bottomContainer}>
        {freezes.length === 0 ? (
          <Text>No hay heladeras.</Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            <View style={styles.sectionContainer}>
              {freezes.map(freeze => (
                <Section key={freeze!.name} {...freeze} />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Home;
