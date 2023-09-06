import { Alert, StyleSheet } from 'react-native';
import React from 'react';
import { Camera, CameraType } from 'react-native-camera-kit';

const CameraScreen = () => {
  return (
    <Camera
      ref={ref => (this.camera = ref)}
      cameraType={CameraType.Back}
      scanBarcode={true}
      onReadCode={event => Alert.alert('QR code found')}
      style={StyleSheet.absoluteFill}
    />
  );
};

export default CameraScreen;
