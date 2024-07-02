import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home children={<LandingPage />} />,
  },
]);

export default router;
