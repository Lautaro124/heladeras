import { Avatar } from '@rneui/themed';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';

const RigthIcon = () => {
  const avatar = useSelector((state: RootState) => state.user.user.avatarUrl);
  return (
    <Avatar
      size={40}
      rounded
      source={{
        uri: avatar,
      }}
    />
  );
};

export default RigthIcon;
