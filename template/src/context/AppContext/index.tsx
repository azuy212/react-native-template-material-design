import React, { createContext, useState } from 'react';

import { AppContextTypes } from './types';

const AppContext = createContext<AppContextTypes>({
  isDarkTheme: false,
  setIsDarkTheme: () => {
    throw new Error('Not implemented');
  },
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
