import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 className="fw-bold">Blog Grid</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none tx-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item tx-blue">Blog Grid</li>
          </ol>
        </nav>
        <img
          className="position-absolute"
          src={images.pageTwo.star}
          alt="star symbol"
        />
      </section>
      {/* <!-- Blogs --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 g-4 mb-5">
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogOne}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Education Week News and Views on Education Policy and
                      Practice.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogTwo}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      The Learning Network Teaching and Learning With The New
                      York Times.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogThree}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Nothing is Impossible to Learn If you are Passionate About
                      this Subject
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogThree}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      The Learning Network Teaching and Learning With The New
                      York Times.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogOne}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Nothing is Impossible to Learn If you are Passionate About
                      this Subject
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 box-radius box-shadow">
                <Link to="/blog-details">
                  <img
                    src={images.pageOne.blogTwo}
                    className="card-img-top"
                    alt="blog-img"
                  />
                </Link>
                <div className="card-body p-4">
                  <span className="pe-3 tx-gray">
                    <i className="fa-regular fa-user pe-2 tx-red"></i>Admin
                  </span>
                  <span className="tx-gray">
                    <i className="fa-regular fa-clock pe-2 tx-red"></i>June 23,
                    2023
                  </span>
                  <h5 className="card-title mt-2 mb-4">
                    <Link
                      className="text-decoration-none tx-black fw-bold"
                      to="/blog-details"
                    >
                      Education Week News and Views on Education Policy and
                      Practice.
                    </Link>
                  </h5>
                  <Link
                    to="/blog-details"
                    className="btn border border-1 px-3 py-2 mb-4"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
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
};

export default Blog;
