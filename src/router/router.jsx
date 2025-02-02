import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import DetailsCard from "../components/DetailsCard";
import AboutMe from "../components/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },

  {
    path: "/details/:id",
    element: <DetailsCard></DetailsCard>,
    
    
  },
]);

export default router;
