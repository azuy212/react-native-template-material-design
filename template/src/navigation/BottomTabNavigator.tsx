import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackNavigator from './HomeStackNavigator';
import { BottomTabParamList } from './types';

import AppContext from '@/context/AppContext';
import SearchScreen from '@/screens/SearchScreen';
import SettingsScreen from '@/screens/SettingsScreens';
import { Theme } from '@/styles';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcons: Record<keyof BottomTabParamList, string> = {
  Home: 'ios-home',
  Search: 'ios-search',
  Settings: 'ios-settings',
};

export default function BottomTabNavigator() {
  const { isDarkTheme } = useContext(AppContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused
            ? TabIcons[route.name]
            : `${TabIcons[route.name]}-outline`;
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:
          Theme[isDarkTheme ? 'dark' : 'light'].colors.accent,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
