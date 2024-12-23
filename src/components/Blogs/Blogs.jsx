
import "../../shared/hero/style.css";
import { images } from "../../assets/imgs/index.js";
import BlogCard from "../../shared/EventAndBlogCard/EventAndBlogCard.jsx";


export default function Blogs(){

    return(
        <>
            <section className="pt-5 blogs">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="title d-flex flex-column align-items-center mb-5">
                        <h2 className="tx-black fw-bold mb-5">
                          Our Latest
                          <span className="position-relative ms-2">
                            Articles
                            <img
                              className="position-absolute"
                              src={images.underline}
                              alt="line"
                            />
                          </span>
                        </h2>
                        <p className="tx-gray w-50 text-center">
                          Through a combination of lectures, readings, discussions,
                          students will gain a solid foundation in educational
                          psychology.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <BlogCard />
                  </div>
                </div>
              </section>
    </>
    )
}

