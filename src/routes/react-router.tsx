import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import { NotFound } from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
