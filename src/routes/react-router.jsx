import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import { NotFound } from "../pages/not-found";
import Login from "../pages/login";
import ProtectedRoute from "../pages/protected/protected-route";

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
    path: "*",
    Component: NotFound,
  },
]);

export default router;
