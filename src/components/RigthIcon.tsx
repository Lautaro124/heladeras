import { Avatar } from '@rneui/themed';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';

const RigthIcon = () => {
  const { avatarUrl, email } = useSelector(
    (state: RootState) => state.user.user,
  );

  return (
    <Avatar
      size={40}
      rounded
      title={avatarUrl !== null ? undefined : email.split('')[0]}
      source={{
        uri: avatarUrl !== null ? avatarUrl : undefined,
      }}
    />
  );
};

export default RigthIcon;
