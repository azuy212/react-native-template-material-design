import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import merge from 'deepmerge';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const AppTheme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#009688',
      accent: '#00BFA5',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#285D4B',
      accent: '#00BFA5',
    },
  },
};

const CombinedDefaultTheme = merge(PaperDefaultTheme, AppTheme.light);
const CombinedDarkTheme = merge(PaperDarkTheme, AppTheme.dark);

export const Theme = {
  light: CombinedDefaultTheme,
  dark: CombinedDarkTheme,
};
