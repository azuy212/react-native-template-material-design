import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContextProvider } from '@/context/AppContext';
import RootNavigation from '@/navigation';

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </AppContextProvider>
  );
}
