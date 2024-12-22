import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import PriceComponent from "../../components/PriceComponent/PriceComponent.jsx";

export default function Price() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Pricing"} breadcrumb={"Pricing"} />

      {/* <!-- Price --> */}

      <PriceComponent/>
     
    </>
  );
}
