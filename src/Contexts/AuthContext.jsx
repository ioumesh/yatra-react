import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  handleTokenChange: () => {},
  user:{},
  handleUserGet:()=>{}
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const handleTokenChange = (token) => {
    setToken(token);
  };
  const [user, setUser] = useState({});
  const handleUserGet = (userData) => {
    setUser(userData);
  };
  return (
    <AuthContext.Provider value={{token,handleTokenChange,user,handleUserGet}}>
      {children}
    </AuthContext.Provider>
  );
};
