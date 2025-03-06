import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/authContext";

function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to={"/register"} />;
}

export default ProtectedRoute;
