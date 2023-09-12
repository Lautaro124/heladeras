import { Avatar } from '@rneui/themed';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import { View } from 'react-native';

const RigthIcon = () => {
  const { avatarUrl } = useSelector((state: RootState) => state.user.user);
  if (avatarUrl && avatarUrl!.length === 0) {
    return <View />;
  }
  return (
    <Avatar
      size={40}
      rounded
      title={avatarUrl!.length === 0 ? 'I' : undefined}
      source={{
        uri: avatarUrl!.length !== 0 ? avatarUrl ?? '' : undefined,
      }}
    />
  );
};

export default RigthIcon;
