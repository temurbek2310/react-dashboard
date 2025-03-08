import React, { createContext, useState } from "react";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
