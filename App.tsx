import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './src/constants/screenNames';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import MainTabNavigator from './src/components/MainTabNavigator';
import RigthIcon from './src/components/RigthIcon';
import FreezeDetail from './src/screens/FreezeDetail';
import type { Freeze } from './src/interface/freeze';

export type RootStackParams = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.TabNavigation]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.Details]: Freeze;
  [ScreenNames.Camera]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={ScreenNames.Login}>
          <RootStack.Screen
            name={ScreenNames.TabNavigation}
            component={MainTabNavigator}
            options={{
              title: 'H.U.A',
              headerLeft: () => <View />,
              headerRight: () => <RigthIcon />,
            }}
          />
          <RootStack.Screen name={ScreenNames.Login} component={Login} />
          <RootStack.Screen
            name={ScreenNames.Details}
            component={FreezeDetail}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
