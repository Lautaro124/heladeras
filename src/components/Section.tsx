import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Freeze } from '../interface/freeze';

const Section = ({ name, status, section, floor }: Freeze) => {
  const temperature = parseInt(status, 10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.title}>
        {temperature}°<Text style={styles.titleC}>C</Text>
      </Text>
      <Text style={styles.place}>
        {floor} - {section}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#E0E1DD',
    borderRadius: 3,
    width: '49%',
    height: '20%',
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
