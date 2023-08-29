import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Freeze } from '../interface/freeze';
import { ListItem, Divider } from '@rneui/themed';

interface HeaderProps {
  freezes: Freeze[];
}

const Header = ({ freezes }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Heladeras con problemas</Text>
          </View>
        }
        data={freezes}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>
                {item.floor} - {item.dependencia}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content style={styles.temperatureContainer}>
              <ListItem.Title style={styles.temperature}>
                {parseInt(item.status, 10)}°C
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
  },
  list: {
    backgroundColor: '#FFF',
    width: '100%',
  },
  listItem: {
    backgroundColor: '#FFF',
  },
  listHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0D1B2A',
  },
  listHeader: {
    backgroundColor: '#FFF',
    width: '100%',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#0D1B2A',
  },
});
