import { createContext } from "react";

const AuthContext = createContext({
  token,
  setToken,
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
