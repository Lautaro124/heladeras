import { Alert, StyleSheet } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'react-native-camera-kit';
import { QRData } from '../interface/qrType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { ScreenNames } from '../constants/screenNames';
import { Freeze } from '../interface/freeze';

type Props = NativeStackScreenProps<RootStackParams, ScreenNames.Camera>;

const CameraScreen = ({ navigation }: Props) => {
  return (
    <Camera
      ref={ref => (this.camera = ref)}
      cameraType={CameraType.Back}
      scanBarcode={true}
      showFrame={true}
      laserColor="red" // (default red) optional, color of laser in scanner frame
      frameColor="white"
      onReadCode={(event: QRData) => {
        const freeze: Freeze = JSON.parse(event.nativeEvent.codeStringValue);
        navigation.navigate(ScreenNames.Details, freeze);
      }}
      style={StyleSheet.absoluteFill}
    />
  );
};

export default CameraScreen;
