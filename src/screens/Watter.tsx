import { View } from 'react-native';
import WatterTank from '../components/WatterTank';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, makeStyles, Text } from '@rneui/themed';
import database, {
  type FirebaseDatabaseTypes,
} from '@react-native-firebase/database';
import BombsSection from '../components/BombsSection';
import { FirebasetData } from 'interface/freeze';

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: theme.colors.background,
    width: '100%',
    padding: theme.spacing.sm,
  },
  tanksContainer: {
    flex: 2,
    width: '100%',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    justifyContent: 'space-around',
  },
  bombsContainer: {
    paddingTop: theme.spacing.lg,
    flex: 2,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: theme.spacing.sm,
    gap: theme.spacing.lg,
  },
  boms: {
    justifyContent: 'space-evenly',
    height: '50%',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  textBoms: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusBomb: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroupContainer: {
    backgroundColor: theme.colors.background,
  },
}));

const Watter = () => {
  const styles = useStyle();
  const reference = database().ref('/test');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tank, setTank] = useState('');

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const handleSnapshot = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const value: FirebasetData = snapshot.val();
        if (value.tanque) {
          setTank(value.tanque);
        }
      }, 500);
    };

    reference.on('value', handleSnapshot);

    return () => {
      reference.off('value', handleSnapshot);
      clearTimeout(timeoutId);
    };
  }, [setTank, reference]);

  return (
    <View style={styles.container}>
      <View style={styles.tanksContainer}>
        <WatterTank title="Tanque principal" value={tank + '%'} />
        <WatterTank title="Cisterna" value="60%" />
      </View>
      <View style={styles.bombsContainer}>
        <Text style={styles.title}>Bombas de agua</Text>
        <ButtonGroup
          buttons={['Automatico', 'Apgado', 'Manual']}
          selectedIndex={selectedIndex}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupContainer}
          onPress={value => {
            setSelectedIndex(value);
          }}
        />
        <View style={styles.boms}>
          <BombsSection title="Bomba 1" status="Encendido" />
          <BombsSection title="Bomba 2" status="Apagado" />
          <BombsSection title="Bomba de repuesto" status="Apagado" />
          <BombsSection title="Bomba de repuesto 2" status="Apagado" />
        </View>
      </View>
    </View>
  );
};

export default Watter;
