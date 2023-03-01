import { createContext, useState } from 'react';

export const HeaderLogoContext = createContext({});

export const HeaderLogoProvider = ({ children }) => {
  const [headerLogo, setHeaderLogo] = useState(true);

  return (
    <HeaderLogoContext.Provider value={{ headerLogo, setHeaderLogo }}>
      {children}
    </HeaderLogoContext.Provider>
  );
};
