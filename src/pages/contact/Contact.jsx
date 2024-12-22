import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import ContactDetails from "../../components/ContactDetails/ContactDetails.jsx";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Contact Us"} breadcrumb={"Contact Us"} />

      {/* <!-- ------------------------- --> */}

      <ContactDetails/>
    </>
  );
}
