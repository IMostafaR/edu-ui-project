import { Link } from "react-router-dom";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses.jsx";
import Badge from "../../shared/Badge/Badge.jsx";



export default function HomeFeaturedCourses() {
  return (
    <>
      <section className="pt-120 f-courses bg-purple">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="title d-flex flex-column align-items-center">
                    <Badge className={"f-courses"} text={"Featured Courses"} />
                    <h1 className="tx-black fw-bold mb-5">
                      Explore Featured Courses
                    </h1>
                  </div>
                  <div className="card text-center mb-5 w-50 m-auto rounded-5">
                    <div className="">
                      <ul className="nav nav-tabs card-header-tabs p-2 d-flex justify-content-between">
                        <li className="nav-item">
                          <Link
                            className="text-decoration-none btn bg-blue text-white px-4 rounded-5 mb-2 ms-2"
                            to="#"
                          >
                            See All
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                            to="#"
                          >
                            Trending
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                            to="#"
                          >
                            Featured
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2"
                            to="#"
                          >
                            Web Design
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="text-decoration-none btn btn-outline-primary border-0 tx-gray px-4 rounded-5 mb-2 ms-2 me-2"
                            to="#"
                          >
                            Popular
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    
              <FeaturedCourses className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" />
            </div>
          </section>
    </>
  );
}
