import { Link } from "react-router-dom";
import "./style.css";
import "../../shared/hero/style.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import Hero from "../../shared/hero/Hero.jsx";

export default function Signup() {
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      {/* <!-- Header Banner --> */}
      <Hero pageName={"Sign Up"} breadcrumb={"Sign Up"} />

      {/* <!-- Card Form --> */}

      <div className="form-container">
        <div className="tabs">
          <div className="tab-link active" id="tab-signup">
            Sign Up
          </div>
          <div className="tab-link" id="tab-signin">
            Sign In
          </div>
        </div>
        <h2 className="form-header">
          Sign in to Your Account <span>👋</span>
        </h2>
        <form id="form-signup">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
            <div className="error-msg" id="error-firstName">
              First name is required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
            <div className="error-msg" id="error-lastName">
              Last name is required.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
            />
            <div className="error-msg" id="error-email">
              Please enter a valid email.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Your Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="togglePassword"
              >
                <i id="password-icon" className="fa-solid fa-eye"></i>
              </button>
            </div>
            <div className="error-msg" id="error-password">
              Password is required.
            </div>
            <div className="text-end mt-1">
              <Link to="#" className="text-muted">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

          <div className="text-center my-3">OR</div>
          <div className="d-flex w-full justify-content-center gap-2">
            <button className="btn btn-light btn-social">
              <img src={images.google} alt="Google" /> Google
            </button>
            <button className="btn btn-light btn-social">
              <img src={images.apple} alt="Apple" /> Apple
            </button>
            <button className="btn btn-light btn-social">
              <img src={images.facebook} alt="Facebook" />
              Facebook
            </button>
          </div>
          <div className="form-footer">
            Already have an account? <Link to="#">Sign In here</Link>
          </div>
        </form>
      </div>
    </>
  );
}
