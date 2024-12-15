import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <section className="header-banner d-flex flex-column justify-content-center align-items-center position-relative">
        <h1 className="fw-bold">Contact Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none tx-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item tx-blue">Contact Us</li>
          </ol>
        </nav>
        <img
          className="position-absolute"
          src={images.pageTwo.star}
          alt="star symbol"
        />
      </section>

      {/* <!-- ------------------------- --> */}

      <main className="contact">
        <div className="container mt-5">
          <div className="contact-body">
            <div className="row main-white box-radius">
              <div className="contact-content col-lg-8 col-md-8">
                <div className="col-lg-10">
                  <h3 className="contact-title mb-5">Send Me Message</h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-input">
                          <input type="text" placeholder="Your Name" />
                          <span className="icon">
                            <i className="fa-solid fa-user tex-gray"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-input">
                          <input type="email" placeholder="Email Address" />
                          <span className="icon">
                            <i className="fa-solid fa-envelope tex-gray"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-input">
                          <input type="text" placeholder="Your Number" />
                          <span className="icon">
                            <i className="fa-solid fa-phone tex-gray"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="contact-input tex-gray">
                          <select
                            className="form-select tex-gray"
                            aria-label="Default select example"
                          >
                            <option value="1">Select Subject</option>
                            <option value="2">Art &amp; Design</option>
                            <option value="3">Graphic Design</option>
                            <option value="4">Web Design</option>
                            <option value="5">UX/UI Design</option>
                          </select>
                          <span className="icon">
                            <i className="fa-solid fa-circle-info tex-gray"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-12 mb-5">
                        <div className="contact-input">
                          <textarea
                            name="message"
                            rows="3"
                            placeholder="Feel free to get in touch!"
                          ></textarea>
                          <span className="icon textarea_Icon">
                            <i className="fa-solid fa-pen tex-gray"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row justify-contant-center align-items-center">
                          <div className="col-lg-4">
                            <Link to="#" className="btn btn-primary px-4 py-3">
                              Send Message
                            </Link>
                          </div>
                          <div className="col-lg-8">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label tex-gray"
                                htmlFor="flexCheckDefault"
                              >
                                I agree that my data is collected and stored.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="contact-info">
                  <h3 className="contact-title mb-5">Get In Touch</h3>
                  <div className="contact-item row">
                    <span className="tex-gray">
                      <i className="fa-solid fa-location-dot tex-gray me-2"></i>
                      Address
                    </span>
                    <Link
                      to="#"
                      className="text-decoration-none tx-black text-bold"
                    >
                      Hilton Conference Centre
                    </Link>
                  </div>
                  <div className="contact-item row my-3">
                    <span className="tex-gray">
                      <i className="fa-solid fa-phone tex-gray me-2 tex-gray"></i>
                      Phone
                    </span>
                    <Link
                      to="#"
                      className="text-decoration-none tx-black text-bold"
                    >
                      +123 548 6458 50
                    </Link>
                  </div>
                  <div className="contact-item row">
                    <span className="tex-gray">
                      <i className="fa-solid fa-envelope tex-gray me-2 tex-gray"></i>
                      Email
                    </span>
                    <Link
                      to="mailto:example@gmail.com"
                      className="text-decoration-none tx-black"
                    >
                      Example@gmail.com
                    </Link>
                  </div>
                  <div className="contact-social mt-4">
                    <span>Social Media</span>
                    <ul className="mt-2">
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345097765!2d-122.41941548468156!3d37.77492977975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c947e0a0b%3A0x9d92c7d338a635b9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600204882561!5m2!1sen!2sus"
            style={{ width: "100%", height: "450px", border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default Contact;
