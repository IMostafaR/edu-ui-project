import { Link } from "react-router-dom";

export default function Card({
  img,
  imgLogo,
  universityName,
  title,
  booksCount,
  usersCount,
  discountPrice,
  price,
}) {
  return (
    <div className="col">
      <div className="card h-100 box-radius border-0 shadow-lg p-2">
        <Link to="/course-details">
          <img src={img} className="card-img-top" alt="course-img" />
        </Link>
        <div className="card-body">
          <div>
            <img src={imgLogo} alt="University logo" />
            <span className="tx-gray ps-3">{universityName}</span>
          </div>
          <h5 className="card-title fw-bold my-3">
            <Link
              className="text-decoration-none tx-black"
              to="/course-details"
            >
              {title}
            </Link>
          </h5>
        </div>
        <div className="card-footer bg-white d-flex justify-content-between justify-content-center pt-3">
          <div className="tx-gray">
            <i className="fa-solid fa-book pe-2"></i>
            <span className="pe-3">{booksCount}</span>
            <i className="fa-regular fa-user"></i>
            <span>{usersCount}</span>
          </div>
          <div className="fw-bold tx-blue">
            <span className="text-decoration-line-through tx-gray pe-2">
              {discountPrice}
            </span>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
