import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { images } from "../../assets/imgs/index.js";

export default function TeacherCard({ showAll = false }) {
  const teacher = [
    {
      img: images.teachers.teacherOne,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherTwo,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherThree,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherFour,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherFive,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherSix,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherSeven,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherEight,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherNine,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
    {
      img: images.teachers.teacherTen,
      name: "marvin mckinney",
      jobTitle: "web designer",
    },
  ];
  const teachersToDisplay = showAll ? teacher : teacher.slice(0, 6);

  return (
    <>
      {teachersToDisplay.map((teacherItem, index) => (
        <div
          key={index}
          className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch"
        >
          <div className="teacher-img box-radius position-relative">
            <img
              className="w-100"
              src={teacherItem.img}
              alt="teacher profile img"
            />
            <Link to="/teacher-details" className="d-block">
              <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
                <h3 className="mt-5 pt-5">{teacherItem.name}</h3>
                <p className="text-white">{teacherItem.jobTitle}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

TeacherCard.propTypes = {
  showAll: PropTypes.bool,
};
