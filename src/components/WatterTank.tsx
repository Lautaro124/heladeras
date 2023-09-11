import { View } from 'react-native';
import React from 'react';
import { makeStyles, Text } from '@rneui/themed';

interface WatterTankProps {
  title: string;
  value: string;
}

const useStyle = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 15,
    position: 'absolute',
    top: theme.spacing.md,
    left: theme.spacing.md,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 40,
  },
}));

const WatterTank = ({ title, value }: WatterTankProps) => {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default WatterTank;
