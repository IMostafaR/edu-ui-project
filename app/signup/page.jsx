import "./style.css";
import "../shared/hero/style.css";
import Head from "next/head";
import SignupForm from "../_components/SignupForm/SignupForm";
import Hero from "../shared/hero/Hero";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Sign Up"} breadcrumb={"Sign Up"} />

      {/* <!-- Card Form --> */}

      <SignupForm />
    </>
  );
}
