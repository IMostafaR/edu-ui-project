import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import BlogCard from "../../components/EventAndBlogCard/EventAndBlogCard.jsx";
import Hero from "../../shared/hero/Hero.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Grid"} breadcrumb={"Blog Grid"} />

      {/* <!-- Blogs --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 g-4 mb-5">
            <BlogCard showAll={true} />
          </div>

          <Pagination />
        </div>
      </section>
    </>
  );
}
