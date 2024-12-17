import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import EventCard from "../../components/EventCard/EventCard.jsx";

export default function Blog() {
  const event = [
    {
      img: images.pageOne.blogOne,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Education Week News and Views on Education Policy and Practice.",
    },
    {
      img: images.pageOne.blogTwo,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        " The Learning Network Teaching and Learning With The New York Times.",
    },
    {
      img: images.pageOne.blogThree,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Nothing is Impossible to Learn If you are Passionate About this Subject",
    },
    {
      img: images.pageOne.blogTwo,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        " The Learning Network Teaching and Learning With The New York Times.",
    },
    {
      img: images.pageOne.blogThree,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Nothing is Impossible to Learn If you are Passionate About this Subject",
    },
    {
      img: images.pageOne.blogOne,
      location: "Admin",
      time: "June 23,2023",
      card_title:
        "Education Week News and Views on Education Policy and Practice.",
    },
  ];
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
            {event.map((event, index) => (
              <EventCard
                key={index}
                img={event.img}
                location={event.location}
                time={event.time}
                card_title={event.card_title}
                button_title="Read More"
              />
            ))}
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
