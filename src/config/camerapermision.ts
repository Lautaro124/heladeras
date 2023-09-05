import { Camera } from 'react-native-vision-camera';

export const getCameraPermissions = async () => {
  await Camera.requestCameraPermission();
  const cameraPermisions = await Camera.getCameraPermissionStatus();
  return cameraPermisions;
};
