import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './src/constants/screenNames';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import RigthIcon from './src/components/RigthIcon';

export type RootStackParams = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.Login]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName={ScreenNames.Login}>
          <RootStack.Screen
            name={ScreenNames.Home}
            component={Home}
            options={{
              headerRight: () => <RigthIcon />,
            }}
          />
          <RootStack.Screen name={ScreenNames.Login} component={Login} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
