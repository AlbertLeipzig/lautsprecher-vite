import { createContext } from 'react';

export const BurgerContext = createContext({});

export const BurgerProvider = ({ children }) => {
  const [burgerState, setBurgerState] = useState('closed');
  return (
    <BurgerContext.Provider value={{ burgerState, setBurgerState }}>
      {children}
    </BurgerContext.Provider>
  );
};
