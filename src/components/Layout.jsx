import Navbar from "../shared/navbar/Navbar.jsx";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
