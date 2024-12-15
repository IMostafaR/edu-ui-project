import "../css/navbar.css";



const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-xl fixed-top fw-bold bg-body">
        <div className="container py-3">
          <a className="navbar-brand position-relative" href="home.html">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ps-xl-4 pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="home.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="course.html"
                >
                  Courses
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="teachers.html"
                >
                  Teachers
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="price.html"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="about.html"
                >
                  About
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="blog.html"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item pe-xl-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="input-group me-2 mb-3 mb-xl-auto w-auto">
                <input
                  type="search"
                  className="form-control bg-gray border-0"
                  placeholder="Search Item"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="bg-gray input-group-text border-0"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <button className="btn py-2 px-3 bg-blue fw-bold w-auto">
              <a className="text-white text-decoration-none" href="signup.html">
                Enroll
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
