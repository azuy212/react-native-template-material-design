import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import BottomTabNavigator from './BottomTabNavigator';
import { RootStackParamList } from './types';

import useColorScheme from '@/hooks/useColorScheme';
import NotFoundScreen from '@/screens/NotFoundScreen';
import { Theme } from '@/styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigation() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={Theme[colorScheme]}>
      <NavigationContainer theme={Theme[colorScheme]}>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default RootNavigation;
