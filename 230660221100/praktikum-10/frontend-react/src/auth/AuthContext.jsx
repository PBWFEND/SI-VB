import { createContext, useContext, useState } from "react";

// 1. Buat context
const AuthContext = createContext();

// 2. Provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // login
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  // logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
