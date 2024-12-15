
const  HeaderBanner = () => {
  return (
    <section
    className="header-banner d-flex flex-column justify-content-center align-items-center position-relative"
  >
    <h1 className="fw-bold">Blog Grid</h1>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb fw-bold">
        <li className="breadcrumb-item">
          <a href="home.html" className="text-decoration-none tx-black">Home</a>
        </li>
        <li className="breadcrumb-item tx-blue">Blog Grid</li>
      </ol>
    </nav>
    <img
      className="position-absolute"
      src="assets/images/page-4/shape-1.png"
      alt="star symbol"
    />
  </section>
  )
}

export default HeaderBanner
