import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import WalletPage from "./pages/wallet/WalletPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"home/wallet"} />,
  },
  {
    path: "/home",
    children: [
      {
        path: "wallet",
        element: <Home children={<WalletPage />} />,
      },
    ],
  },
]);

export default router;
