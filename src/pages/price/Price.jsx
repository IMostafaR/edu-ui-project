import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";

export default function Price() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Pricing"} breadcrumb={"Pricing"} />

      {/* <!-- Price --> */}

      <Pricing />
    </>
  );
}
