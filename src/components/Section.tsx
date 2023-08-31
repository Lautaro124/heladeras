import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Freeze } from '../interface/freeze';

const Section = ({ name, status, dependencia, floor }: Freeze) => {
  const temperature = parseInt(status, 10);
  const isDangerous = temperature >= 10;
  const styleContainer = {
    backgroundColor: isDangerous ? '#f7cad0' : '#E0E1DD',
    ...styles.container,
  };

  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.title}>
        {temperature}°<Text style={styles.titleC}>C</Text>
      </Text>
      <Text style={styles.place}>
        {floor} - {dependencia}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 3,
    width: '49%',
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    width: '100%',
    textAlign: 'left',
    fontSize: 13,
    color: '#415A77',
    top: 5,
    left: 5,
    position: 'absolute',
    fontWeight: '400',
  },
  place: {
    color: '#415A77',
    position: 'absolute',
    bottom: 5,
    right: 5,
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
    color: '#0D1B2A',
  },
});
