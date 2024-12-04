import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import AddEquipment from "../pages/addEquipment/AddEquipment";
import AllEquipment from "../pages/allSportsEquipment/AllEquipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  {
    path: "/addEquipment",
    element: <AddEquipment />,
  },
  {
    path: "/allEquipment",
    element: <AllEquipment />,
    loader: () => fetch("http://localhost:5000/all_equipment"),
  },
]);

export default router;
