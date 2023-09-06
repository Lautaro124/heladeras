import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface WatterTankProps {
  title: string;
  value: string;
  bacground: string;
}

const WatterTank = ({ title, value, bacground }: WatterTankProps) => {
  const containerStyle = [{ backgroundColor: bacground }, styles.container];

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default WatterTank;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'relative',
  },
  title: {
    fontSize: 15,
    color: '#0D1B2A',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#0D1B2A',
  },
});
