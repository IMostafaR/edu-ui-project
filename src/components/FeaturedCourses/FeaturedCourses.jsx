import { Link } from "react-router-dom";
import Card from "../CoursesCard/Card.jsx";
import { images } from "../../assets/imgs/index.js";
export default function FeaturedCourses() {
  const courses = [
    {
      img: images.pageOne.courses.courseOne,
      img_logo: images.pageOne.uniLogo.uniOne,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseTwo,
      img_logo: images.pageOne.uniLogo.uniTwo,
      name: "Yale University",
      card_title: "Online Courses Can Also Provide Access High-Quality",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseThree,
      img_logo: images.pageOne.uniLogo.uniThree,
      name: "University of London",
      card_title: "Online Courses Can Also Provide Access High-Quality",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseFour,
      img_logo: images.pageOne.uniLogo.uniFour,
      name: "University of London",
      card_title: "Learn how to start an amazon FBA store & analysis",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseFive,
      img_logo: images.pageOne.uniLogo.uniFive,
      name: "Yonsei University",
      card_title: "Unity Medical Visualize Deployment and Usability",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseSix,
      img_logo: images.pageOne.uniLogo.uniSix,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseSeven,
      img_logo: images.pageOne.uniLogo.uniSeven,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
    {
      img: images.pageOne.courses.courseEight,
      img_logo: images.pageOne.uniLogo.uniEight,
      name: "University of London",
      card_title: "The Complete JavaScript Course From Zero to Expert!",
      book: "23",
      user: "50",
      discount: "$130",
      price: "$86",
    },
  ];

  return (
    <section className="pt-120 f-courses bg-purple">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title d-flex flex-column align-items-center">
              <span className="f-courses bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                Featured Courses
              </span>
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

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {courses.map((course, index) => (
            <Card
              key={index}
              img={course.img}
              imgLogo={course.img_logo}
              universityName={course.name}
              title={course.card_title}
              booksCount={course.book}
              usersCount={course.user}
              discountPrice={course.discount}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
