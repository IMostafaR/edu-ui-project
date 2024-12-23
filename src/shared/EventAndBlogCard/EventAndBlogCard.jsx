import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { images } from "../../assets/imgs/index.js";

export default function EventAndBlogCard({ blog = true, showAll = false }) {
  const events = [
    {
      img: images.pageOne.blogOne,
      location: "London, US",
      time: "8.00 am - 6.00 pm",
      card_title:
        "These are Designed to Provide Hands Training and Skill-Building.",
    },
    {
      img: images.pageOne.blogTwo,
      location: " London, US",
      time: "8.00 am - 6.00 pm",
      card_title: "Personalized Learning & Meeting The Needs of Every Student.",
    },
    {
      img: images.pageOne.blogThree,
      location: "London, US",
      time: "8.00 am - 6.00 pm",
      card_title: "The Whole Child Fostering Social and Emotional Development.",
    },
  ];

  const blogs = [
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

  const eventIcon = "fa-solid fa-location-dot";
  const blogIcon = "fa-regular fa-user";

  // const contentToDisplay = blog ? blogs : events;
  const contentToDisplay = blog
    ? showAll
      ? blogs
      : blogs.slice(0, 3)
    : events;
  const iconToDisplay = blog ? blogIcon : eventIcon;

  return (
    <>
      {contentToDisplay.map((item, index) => (
        <div key={index} className="col">
          <div className="card h-100 box-radius box-shadow p-3">
            <Link to="/blog-details">
              <img
                src={item.img}
                className="card-img-top"
                alt={blog ? "blog-img" : "event-img"}
              />
            </Link>
            <div className="card-body p-4">
              <span className="pe-3 tx-gray">
                <i className={`${iconToDisplay} pe-2 tx-red`}></i>
                {blog ? item.location : item.location}
              </span>
              <span className="tx-gray">
                <i className="fa-regular fa-clock pe-2 tx-red"></i>
                {item.time}
              </span>
              <h5 className="card-title mt-2 mb-4">
                <Link
                  className="text-decoration-none tx-black fw-bold"
                  to="/blog-details"
                >
                  {item.card_title}
                </Link>
              </h5>
              <Link
                to="/blog-details"
                className="btn border border-1 px-3 py-2 mb-4 fw-bold"
              >
                {blog ? "Read More" : "Get Ticket"}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

EventAndBlogCard.propTypes = {
  blog: PropTypes.bool,
  showAll: PropTypes.bool,
};
