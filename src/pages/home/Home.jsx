import "./style.css";
import { Helmet } from "react-helmet";
import Learning from "../../shared/Learning/learning.jsx";
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
      <HomeBanner />

      {/* <!-- Popular Categories --> */}
      <PopularCategories />
      {/* <!-- Featured Courses --> */}
      <HomeFeaturedCourses />
      {/* <!-- Start learning Free --> */}
      <Learning />
      {/* <!-- Events --> */}
      <HomeEvents />
      {/* <!-- Reviews --> */}
      <HomeReviews />
      {/* <!-- Blogs --> */}
      <HomeBlogs />
    </>
  );
}
