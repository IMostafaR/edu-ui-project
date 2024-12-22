import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";
import Details from "../../components/Details/Details.jsx";

export default function BlogDetails() {
  return (
    <>
      <Helmet>
        <title>Blog Details</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Details"} breadcrumb={"Blog Details"} />

      {/* <!-- blog-details --> */}
      <Details/>
      
    </>
  );
}
