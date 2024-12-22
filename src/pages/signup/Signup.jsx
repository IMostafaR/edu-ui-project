import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent.jsx";

export default function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Sign Up"} breadcrumb={"Sign Up"} />

      {/* <!-- Card Form --> */}

     <SignUpComponent/>
     
    </>
  );
}
