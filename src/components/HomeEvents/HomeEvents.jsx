
import EventCard from "../../shared/EventAndBlogCard/EventAndBlogCard.jsx";
import Badge from "../../shared/Badge/Badge.jsx";

export default function HomeEvents() {
  return (
    <>
     <section className="pt-120 events f-courses bg-purple">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between gap-2 align-content-center">
                    <div>
                      <Badge
                        className={"events"}
                        text={"Conference on Education"}
                      />
                      <h1 className="fw-bold tx-black mb-5">Upcoming Events</h1>
                    </div>
                    <div className="d-flex justify-content-start gap-2 align-items-center">
                      <i
                        className="fa-solid fa-arrow-left border rounded-circle shadow-lg tx-gray p-3"
                        role="button"
                      ></i>
                      <i
                        className="fa-solid fa-arrow-right border rounded-circle shadow-lg tx-gray p-3"
                        role="button"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="row row-cols-1 row-cols-lg-3 g-4">
                <EventCard blog={false} />
              </div>
            </div>
          </section>
     
    </>
  );
}
