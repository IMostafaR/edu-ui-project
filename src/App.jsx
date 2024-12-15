import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import BlogDetails from "./pages/blog-details/BlogDetails.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Courses from "./pages/course/Course.jsx";
import CourseDetails from "./pages/course-details/CourseDetails.jsx";
import Pricing from "./pages/price/Price.jsx";
import Signup from "./pages/signup/Signup.jsx";
import TeacherDetails from "./pages/teacher-details/TeacherDetails.jsx";
import Teacher from "./pages/teachers/Teachers.jsx";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "course-details",
          element: <CourseDetails />,
        },
        {
          path: "teachers",
          element: <Teacher />,
        },
        {
          path: "teacher-details",
          element: <TeacherDetails />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog-details",
          element: <BlogDetails />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
