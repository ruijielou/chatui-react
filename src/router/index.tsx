import { useRoutes } from "react-router-dom";

// import AuthRouter from "@/routers/utils/authRouter";
// import Router from "@/routers/index";
import Home from "../views/home";
import About from "../views/about";
import Login from "../views/login";
import LayoutComponent from "../components/layout"

const Router = () => {
    return useRoutes([
      {
        path: "/",
        element: <Login />,
      },
      {
        element: <LayoutComponent/>,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          }
        ]
      },
    ]);
  };

  export default Router