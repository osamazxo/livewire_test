import Home from "@pages/Home";
import LandingPage from "@pages/LandingPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
]);
export { router };
