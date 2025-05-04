import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user) => {
    setAuthenticatedUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuthenticatedUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
