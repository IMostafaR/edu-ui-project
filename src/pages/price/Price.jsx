import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 className="fw-bold">Pricing</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none tx-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item tx-blue">Pricing</li>
          </ol>
        </nav>
        <img
          className="position-absolute"
          src={images.pageTwo.star}
          alt="star symbol"
        />
      </section>

      {/* <!-- Price --> */}

      <section className="pt-120 price">
        <div className="container">
          <div className="row text-center g-5">
            <div className="col-md-4">
              <div className="box card border-0 p-5 bg-gray box-radius ">
                <h4 className="card-title">Standard</h4>
                <p className="text-muted">
                  <s>$24.00</s>
                </p>
                <div className="pricing d-flex justify-content-center gap-2 align-items-end">
                  <h2 className="fw-bold">$22</h2>
                  <p className="text-start fw-bold">
                    Per <br />
                    Month
                  </p>
                </div>

                <p className="text-muted">
                  Discounted Price For USA <br />
                  Per User, billed annually
                </p>
                <Link
                  to="/signup"
                  className="btn border border-2 py-2 fw-bold mb-3 border-light-subtle"
                >
                  Enroll Now
                </Link>
                <p className="mt-2">
                  <Link to="#" className="tx-black me-2">
                    Choose 2 - year plan
                  </Link>
                  <span className="badge bg-danger-subtle tx-red border-1 border px-2 p-1">
                    Save 6%
                  </span>
                </p>
                <ul className="list-unstyled text-start mt-3 text-muted">
                  <li>&bull; Facilizes sed odic morbid quiz.</li>
                  <li>&bull; Design nexus et malasadas fames brand.</li>
                  <li>&bull; Artistic mind will be great for creation.</li>
                  <li>&bull; Roadmap for business agency arbitrator.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box card p-5 border-0 position-relative bg-gray box-radius ">
                <h4 className="card-title">
                  Professional
                  <span className="badge bg-danger position-absolute top-0 end-0 px-3 py-2 rounded-0 rounded-top-1 fs-6">
                    Most Popular
                  </span>
                </h4>
                <p className="text-muted">
                  <s>$36.00</s>
                </p>
                <div className="pricing d-flex justify-content-center gap-2 align-items-end">
                  <h2 className="fw-bold">$22</h2>
                  <p className="text-start fw-bold">
                    Per <br />
                    Month
                  </p>
                </div>
                <p className="text-muted">
                  Discounted Price For USA <br />
                  Per User, billed annually
                </p>
                <Link
                  to="/signup"
                  className="btn border border-2 py-2 fw-bold mb-3 border-light-subtle"
                >
                  Enroll Now
                </Link>
                <p className="mt-2">
                  <Link to="#" className="tx-black me-2">
                    Choose 2 - year plan
                  </Link>
                  <span className="badge bg-danger-subtle tx-red border-1 border px-2 p-1">
                    Save 24%
                  </span>
                </p>
                <ul className="list-unstyled text-start mt-3 text-muted">
                  <li>&bull; Facilizes sed odic morbid quiz.</li>
                  <li>&bull; Design nexus et malasadas fames brand.</li>
                  <li>&bull; Artistic mind will be great for creation.</li>
                  <li>&bull; Roadmap for business agency arbitrator.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box card border-0 p-5 bg-gray box-radius ">
                <h4 className="card-title">Business</h4>
                <p className="text-muted">
                  <s>$74.00</s>
                </p>
                <div className="pricing d-flex justify-content-center gap-2 align-items-end">
                  <h2 className="fw-bold">$22</h2>
                  <p className="text-start fw-bold">
                    Per <br />
                    Month
                  </p>
                </div>
                <p className="text-muted">
                  Discounted Price For USA <br />
                  Per User, billed annually
                </p>
                <Link
                  to="/signup"
                  className="btn border border-2 py-2 fw-bold mb-3 border-light-subtle"
                >
                  Enroll Now
                </Link>
                <p className="mt-2">
                  <Link to="#" className="tx-black me-2">
                    Choose 2 - year plan
                  </Link>
                  <span className="badge bg-danger-subtle tx-red border-1 border px-2 p-1">
                    Save 12%
                  </span>
                </p>
                <ul className="list-unstyled text-start mt-3 text-muted">
                  <li>&bull; Facilizes sed odic morbid quiz.</li>
                  <li>&bull; Design nexus et malasadas fames brand.</li>
                  <li>&bull; Artistic mind will be great for creation.</li>
                  <li>&bull; Roadmap for business agency arbitrator.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
