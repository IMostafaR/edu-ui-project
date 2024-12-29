import "./style.css";
import "../shared/hero/style.css";
import Pricing from "../_components/Pricing/Pricing";
import Hero from "../shared/hero/Hero";
import Head from "next/head";

export default function Price() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Pricing"} breadcrumb={"Pricing"} />

      {/* <!-- Price --> */}

      <Pricing />
    </>
  );
}
