import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);
        setUser(data);
      } catch (error) {
        logout();
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const login = () => {
    setToken("");
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
