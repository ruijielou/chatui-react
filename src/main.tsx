import React from "react";
import ReactDOM from "react-dom/client";
import "@unocss/reset/tailwind.css"; //初始化css
import "uno.css"; //引入unocss
import "@chatui/core/es/styles/index.less";
import { Provider } from "react-redux";
import {store} from "./store";
// import "@/styles/chatui.less"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.less";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);
