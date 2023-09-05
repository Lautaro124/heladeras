import { StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { getCameraPermissions } from '../config/camerapermision';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    getCameraPermissions();
  }, []);

  if (device == null) {
    return <ActivityIndicator />;
  }
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
