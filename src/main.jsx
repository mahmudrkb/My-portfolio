
import { createRoot } from "react-dom/client";


import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
