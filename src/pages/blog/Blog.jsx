import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import BlogCard from "../../components/EventAndBlogCard/EventAndBlogCard.jsx";
import Hero from "../../shared/hero/Hero.jsx";

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

          <div className="row">
            <div className="col">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link tx-gray" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
