import PropTypes from "prop-types";
import { images } from "../../assets/imgs/index.js";

export default function ReviewCard() {
  const reviews = [
    {
      img: images.pageOne.adminOne,
      name: "Brian Cumin",
      designation: "Indigo Violet",
      review:
        "  Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet.",
    },
    {
      img: images.pageOne.adminTwo,
      name: "Penny Tool",
      designation: "Web Designer",
      review:
        "  Nunc valuate nil urn, id fermentum sem portico non volitant leafed lorem, quiz poseur ipsum aliquot a. Morbi urn unique ac herderite volutpatorca, pelletise in felis elemental fermentum lobotids effector mi. nula denim orca, so dales at ante dales ornate rises..",
    },
    {
      img: images.pageOne.adminThree,
      name: "Brian Cumin",
      designation: "Indigo Violet",
      review:
        "  Lorem ipsum dolorArcu risus quis varius quam quisque id diam. mauris consectetur adipiscing elit, sed do eiusm commodo imperdiet.",
    },
  ];
  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} className="col">
          <div className="card bg-gray border-0 box-radius p-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div>
                    <img
                      className="rounded-circle"
                      src={review.img}
                      alt="admin"
                    />
                  </div>
                  <div>
                    <p className="m-0 fw-bold tx-black">{review.name}</p>
                    <p className="m-0 tx-gray">{review.designation}</p>
                  </div>
                </div>
                <div>
                  <i className="fa-solid fa-star tx-yellow"></i>
                  <i className="fa-solid fa-star tx-yellow"></i>
                  <i className="fa-solid fa-star tx-yellow"></i>
                  <i className="fa-solid fa-star tx-yellow"></i>
                  <i className="fa-solid fa-star tx-yellow"></i>
                </div>
              </div>
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

ReviewCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

// export default ReviewCard;
