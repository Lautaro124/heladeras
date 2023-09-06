import { StyleSheet, View, Text } from 'react-native';
import WatterTank from '../components/WatterTank';
import React, { useState } from 'react';
import { ButtonGroup } from '@rneui/themed';
import { Divider } from '@rneui/base';

const Watter = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const backgroundOfTanks = ['#E0E1DD', '#E0E1DD', '#E0E1DD'];

  return (
    <View style={styles.container}>
      <View style={styles.tanksContainer}>
        <WatterTank
          title="Tanque de agua"
          value="80%"
          bacground={backgroundOfTanks[selectedIndex]}
        />
        <WatterTank
          title="Cisterna"
          value="60%"
          bacground={backgroundOfTanks[selectedIndex]}
        />
      </View>
      <View style={styles.bombsContainer}>
        <Divider />
        <Text style={styles.title}>Bombas de agua</Text>
        <ButtonGroup
          buttons={['Automatico', 'Apgado', 'Manual']}
          selectedIndex={selectedIndex}
          onPress={value => {
            setSelectedIndex(value);
          }}
        />
        <View style={styles.boms}>
          <View style={styles.groupBombs}>
            <Text style={styles.textBoms}>Bomba 1</Text>
            <Text style={styles.statusBomb}>Apagado</Text>
          </View>
          <View style={styles.groupBombs}>
            <Text style={styles.textBoms}>Bomba 2</Text>
            <Text style={styles.statusBomb}>Prendido</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Watter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    width: '100%',
    padding: 5,
  },
  tanksContainer: {
    flex: 2,
    width: '100%',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-around',
  },
  bombsContainer: {
    paddingTop: 10,
    flex: 2,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 5,
    gap: 20,
  },
  boms: {
    justifyContent: 'space-evenly',
    height: '50%',
    gap: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },
  textBoms: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },
  statusBomb: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D1B2A',
  },
  groupBombs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
});
