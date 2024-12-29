import "./style.css";
import "../shared/hero/style.css";
import Head from "next/head";
import BlogInfo from "../_components/BlogInfo/BlogInfo";
import Hero from "../shared/hero/Hero";

export default function BlogDetails() {
  return (
    <>
      <Head>
        <title>BlogDetails</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Details"} breadcrumb={"Blog Details"} />

      {/* <!-- blog-details --> */}
      <BlogInfo />
    </>
  );
}
