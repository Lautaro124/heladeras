import { View } from 'react-native';
import React from 'react';
import { Text, makeStyles } from '@rneui/themed';

interface BombsSectionProps {
  title: string;
  status: 'Encendido' | 'Apagado';
}

const useStyle = makeStyles(theme => ({
  boms: {
    justifyContent: 'space-evenly',
    height: '50%',
    gap: theme.spacing.md,
  },
  textBoms: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  statusBomb: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  groupBombs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.lg,
    alignItems: 'center',
  },
}));

const BombsSection = ({ title, status }: BombsSectionProps) => {
  const styles = useStyle();
  return (
    <View style={styles.groupBombs}>
      <Text style={styles.textBoms}>{title}</Text>
      <Text style={styles.statusBomb}>{status}</Text>
    </View>
  );
};

export default BombsSection;
