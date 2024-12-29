import "./style.css";
import "../shared/hero/style.css";
import Pagination from "../shared/Pagination/Pagination";
import EventAndBlogCard from "../shared/EventAndBlogCard/EventAndBlogCard";
import Search from "../shared/Search/Search";
import Hero from "../shared/hero/Hero";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Blog Grid"} breadcrumb={"Blog Grid"} />

      {/* <!-- Blogs --> */}
      <section className="pt-120 blogs">
        <div className="container">
          <Search />

          <div className="row row-cols-1 row-cols-lg-3 g-4 mb-5">
            <EventAndBlogCard showAll={true} />
          </div>

          <Pagination />
        </div>
      </section>
    </>
  );
}
