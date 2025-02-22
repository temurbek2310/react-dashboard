import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import { NotFound } from "../pages/not-found";
import { Login } from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    index: true,
    Component: Home,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
