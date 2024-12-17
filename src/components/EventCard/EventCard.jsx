// import React from 'react'
import { Link } from "react-router-dom";
// import { images } from "../../assets/imgs/index.js";

export default function EventCard({
  img,
  location,
  time,
  card_title,
  button_title,
}) {
  return (
    <div className="col">
      <div className="card h-100 box-radius box-shadow p-3">
        <Link to="/blog-details">
          <img src={img} className="card-img-top" alt="blog-img" />
        </Link>
        <div className="card-body p-4">
          <span className="pe-3 tx-gray">
            <i className="fa-solid fa-location-dot pe-2 tx-red"></i>
            {location}
          </span>
          <span className="tx-gray">
            <i className="fa-regular fa-clock pe-2 tx-red"></i>
            {time}
          </span>
          <h5 className="card-title mt-2 mb-4">
            <Link
              className="text-decoration-none tx-black fw-bold"
              to="/blog-details"
            >
              {card_title}
            </Link>
          </h5>
          <Link
            to="/blog-details"
            className="btn border border-1 px-3 py-2 mb-4"
          >
            {button_title}
          </Link>
        </div>
      </div>
    </div>
  );
}
