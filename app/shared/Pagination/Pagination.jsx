import Link from "next/link";

const Pagination = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link tx-gray" href="#">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link tx-gray" href="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
