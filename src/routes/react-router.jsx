import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import { NotFound } from "../pages/not-found";
import Login from "../pages/login";
import ProtectedRoute from "../pages/protected/protected-route";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    loader: () => import("../pages/home"),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
