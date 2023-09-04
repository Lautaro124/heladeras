import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './src/constants/screenNames';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import MainTabNavigator from './src/components/MainTabNavigator';
import RigthIcon from './src/components/RigthIcon';

export type RootStackParams = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.TabNavigation]: undefined;
  [ScreenNames.Login]: undefined;
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
              headerRight: () => <RigthIcon />,
              headerBackButtonMenuEnabled: false,
            }}
          />
          <RootStack.Screen name={ScreenNames.Login} component={Login} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
