import { images } from "../../assets/imgs/index.js";
import EventCard from "../EventCard/EventCard.jsx";

export default function Events() {
  const event = [
    {
      img: images.pageOne.blogOne,
      location: "London, US",
      time: "8.00 am - 6.00 pm",
      card_title: "The Whole Child Fostering Social and Emotional Development.",
    },
    {
      img: images.pageOne.blogTwo,
      location: " London, US",
      time: "8.00 am - 6.00 pm",
      card_title: "Personalized Learning & Meeting The Needs of Every Student.",
    },
    {
      img: images.pageOne.blogThree,
      location: "London, US",
      time: "8.00 am - 6.00 pm",
      card_title: "The Whole Child Fostering Social and Emotional Development.",
    },
  ];
  return (
    <section className="pt-120 events f-courses bg-purple">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between gap-2 align-content-center">
              <div>
                <span className="events bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                  Conference on Education
                </span>
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
          {event.map((event, index) => (
            <EventCard
              key={index}
              img={event.img}
              location={event.location}
              time={event.time}
              card_title={event.card_title}
              button_title="Get Ticket"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
