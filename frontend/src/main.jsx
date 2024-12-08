import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./component/form/form";
import Payment from "./component/payment/payment";
import Reviewproduct from "./component/reviewproduct/reviewproduct";
import Summaryproduct from "./component/selecticecream/summaryproduct/summaryproduct";
import Summayselecticecream from "./component/selecticecream/summaryselecticecream/summayselecticecream";
import Icecream from "./component/selecticecream/icecream";
import Servingtype from "./component/selecticecream/servingtype";
import Source from "./component/selecticecream/source";
import Topping from "./component/selecticecream/topping";
import Slectshipping from "./component/selectshipping/slectshipping";
import Delivery from "./component/selectshipping/delivery";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/Reviewproduct",
    element: <Reviewproduct />,
  },
  {
    path: "/Summaryproduct",
    element: <Summaryproduct />,
  },
  {
    path: "/Summayselecticecream",
    element: <Summayselecticecream />,
  },
  {
    path: "/Icecream",
    element: <Icecream />,
  },
  {
    path: "/Servingtype",
    element: <Servingtype />,
  },
  {
    path: "/Source",
    element: <Source />,
  },
  {
    path: "/Topping",
    element: <Topping />,
  },
  {
    path: "/Slectshipping",
    element: <Slectshipping />,
  },
  {
    path: "/Delivery",
    element: <Delivery />,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
