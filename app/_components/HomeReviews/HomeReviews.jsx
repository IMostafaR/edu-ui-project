import Badge from "@/app/shared/Badge/Badge";
import ReviewCard from "@/app/shared/ReviewCard/ReviewCard";

export default function HomeReviews() {
  return (
    <>
      <section className="pt-120 blogs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title d-flex flex-column align-items-center mb-5">
                <Badge className={"our-blog"} text={"Student Reviews"} />
                <h2 className="tx-black fw-bold mb-5">
                  What Our Students Saying
                </h2>
                <p className="tx-gray w-50 text-center">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <ReviewCard />
          </div>
        </div>
      </section>
    </>
  );
}
