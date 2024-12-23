import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import Hero from "../../shared/hero/Hero.jsx";
import BlogInfo from "../../components/BlogInfo/BlogInfo.jsx";

export default function BlogDetails() {
  return (
    <>
      <Helmet>
        <title>Blog Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Details"} breadcrumb={"Blog Details"} />

      {/* <!-- blog-details --> */}
      <BlogInfo />
    </>
  );
}
