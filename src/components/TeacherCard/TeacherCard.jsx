import { Link } from "react-router-dom";
export default function TeacherCard({ img, name, jobTitle }) {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 align-items-stretch">
      <div className="teacher-img box-radius position-relative">
        <img className="w-100" src={img} alt="teacher profile img" />
        <Link to="/teacher-details" className="d-block">
          <div className="teacher-info position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-white fw-bold flex-column box-radius">
            <h3 className="mt-5 pt-5">{name}</h3>
            <p>{jobTitle}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
