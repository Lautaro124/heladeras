import { Avatar, Icon, makeStyles } from '@rneui/themed';
import React from 'react';
import { useThemeMode } from '@rneui/themed';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const RigthIcon = () => {
  const style = useStyles();
  const { mode, setMode } = useThemeMode();
  const { avatarUrl } = useSelector((state: RootState) => state.user.user);
  const isDarkMode = mode === 'dark';
  const changeDarkMode = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };
  return (
    <View style={style.container}>
      <Icon
        name={isDarkMode ? 'dark-mode' : 'light-mode'}
        type="material"
        color="#E9E3E6"
        size={30}
        onPress={changeDarkMode}
      />
      <Avatar
        size={40}
        rounded
        title={avatarUrl!.length === 0 ? 'I' : undefined}
        source={{
          uri: avatarUrl!.length !== 0 ? avatarUrl ?? '' : undefined,
        }}
      />
    </View>
  );
};

export default RigthIcon;
