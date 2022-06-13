import React, { useContext } from 'react';

import { List, Switch } from 'react-native-paper';

import AppContext from '@/context/AppContext';

function SettingsScreen() {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

  return (
    <>
      <List.Item
        title="Dark Mode"
        description="Enable Dark Mode"
        left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        right={() => (
          <Switch value={isDarkTheme} onValueChange={setIsDarkTheme} />
        )}
        onPress={() => setIsDarkTheme(!isDarkTheme)}
      />
    </>
  );
}

export default SettingsScreen;
