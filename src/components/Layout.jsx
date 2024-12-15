import Footer from "../shared/footer/Footer.jsx";
import Navbar from "../shared/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
