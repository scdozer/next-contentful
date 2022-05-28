import React from 'react';

export const AppContext = React.createContext({});

/**
 * Holds global app state
 * Wraps children with Context.Provider
 * @param {node} children
 * @returns children wrapped with Context.Provider
 */
export function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
