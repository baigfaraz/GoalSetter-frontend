// src/contexts/TokenContext.js
import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const value = { token, setToken };

  return (
    <TokenContext.Provider value={value}>
      {children}
    </TokenContext.Provider>
  );
};
