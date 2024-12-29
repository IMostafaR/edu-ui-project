import HomeBanner from "./_components/HomeBanner/HomeBanner";
import HomeBlogs from "./_components/HomeBlogs/HomeBlogs";
import HomeEvents from "./_components/HomeEvents/HomeEvents";
import HomeFeaturedCourses from "./_components/HomeFeaturedCourses/HomeFeaturedCourses";
import HomeReviews from "./_components/HomeReviews/HomeReviews";
import PopularCategories from "./_components/PopularCategories/PopularCategories";
import Learning from "./shared/Learning/Learning";
import "./style.css";
// import Learning from "../../shared/Learning/learning.jsx";
// import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx";
// import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx";
// import HomeFeaturedCourses from "../../components/HomeFeaturedCourses/HomeFeaturedCourses.jsx";
// import HomeEvents from "../../components/HomeEvents/HomeEvents.jsx";
// import HomeReviews from "../../components/HomeReviews/HomeReviews.jsx";
// import HomeBlogs from "../../components/HomeBlogs/HomeBlogs.jsx";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
