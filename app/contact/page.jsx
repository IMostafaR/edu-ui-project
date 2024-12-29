import "./style.css";
import "../shared/hero/style.css";
import Head from "next/head";
import Hero from "../shared/hero/Hero";
import ContactForm from "../_components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Contact Us"} breadcrumb={"Contact Us"} />

      {/* <!-- ------------------------- --> */}
      <ContactForm />
    </>
  );
}
