// import { Link } from "react-router-dom";
import Card from "../../components/CoursesCard/CoursesCard.jsx";
import { images } from "../../assets/imgs/index.js";
import PropTypes from "prop-types";

export default function FeaturedCourses({ className = "" }) {
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
    <div className={`${className}`}>
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
  );
}

FeaturedCourses.propTypes = {
  className: PropTypes.string,
};
