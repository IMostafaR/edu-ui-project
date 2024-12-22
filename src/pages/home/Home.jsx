import { Link } from "react-router-dom";
import { images } from "../../assets/imgs/index.js";
import "./style.css";
import { Helmet } from "react-helmet";
import Learning from "../../shared/Learning/learning.jsx";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses.jsx";
import ReviewCard from "../../shared/ReviewCard/ReviewCard.jsx";
import CategoryCard from "../../shared/CategoryCard/CategoryCard.jsx";
import EventCard from "../../shared/EventAndBlogCard/EventAndBlogCard.jsx";
import Badge from "../../shared/Badge/Badge.jsx";
import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx";
import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx";
import HomeFeaturedCourses from "../../components/HomeFeaturedCourses/HomeFeaturedCourses.jsx";
import HomeEvents from "../../components/HomeEvents/HomeEvents.jsx";
import HomeReviews from "../../components/HomeReviews/HomeReviews.jsx";
import HomeBlogs from "../../components/HomeBlogs/HomeBlogs.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* home banner */}
      <HomeBanner/>

      {/* <!-- Popular Categories --> */}
      <PopularCategories/>
      {/* <!-- Featured Courses --> */}
      <HomeFeaturedCourses/>
      {/* <!-- Start learning Free --> */}
      <Learning />
      {/* <!-- Events --> */}
      <HomeEvents/>
      {/* <!-- Reviews --> */}
      <HomeReviews/>
      {/* <!-- Blogs --> */}
      <HomeBlogs/>
    </>
  );
}
