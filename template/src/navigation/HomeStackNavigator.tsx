import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from './types';

import { APP_TITLE } from '@/constants';
import DetailScreen from '@/screens/DetailScreen';
import ListScreen from '@/screens/ListScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ headerTitle: APP_TITLE }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
