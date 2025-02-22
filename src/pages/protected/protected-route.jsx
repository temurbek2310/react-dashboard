import React from "react";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/login");
  }, []);
  return <>{children}</>;
}

export default ProtectedRoute;