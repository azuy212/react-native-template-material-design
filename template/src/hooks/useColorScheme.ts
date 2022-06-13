import { useContext } from 'react';

import { ColorSchemeName } from 'react-native';

import AppContext from '@/context/AppContext';

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const { isDarkTheme } = useContext(AppContext);
  return isDarkTheme ? 'dark' : 'light';
}
