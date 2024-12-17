import { images } from "../../assets/imgs/index.js";

export default function Reviews() {
  return (
    <section className="pt-120 blogs">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title d-flex flex-column align-items-center mb-5">
              <span className="our-blog bg-light-red py-1 px-4 tx-red fw-bold mb-3 d-inline-block">
                Student Reviews
              </span>
              <h2 className="tx-black fw-bold mb-5">
                What Our Students Saying
              </h2>
              <p className="tx-gray w-50 text-center">
                Through a combination of lectures, readings, discussions,
                students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card bg-gray border-0 box-radius p-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div>
                      <img
                        className="rounded-circle"
                        src={images.pageOne.adminOne}
                        alt="admin"
                      />
                    </div>
                    <div>
                      <p className="m-0 fw-bold tx-black">Brian Cumin</p>
                      <p className="m-0 tx-gray">Indigo Violet</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                  </div>
                </div>
                <p className="card-text">
                  Lorem ipsum dolorArcu risus quis varius quam quisque id diam.
                  mauris consectetur adipiscing elit, sed do eiusm commodo
                  imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-gray border-0 box-radius p-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div>
                      <img
                        className="rounded-circle"
                        src={images.pageOne.adminTwo}
                        alt="admin"
                      />
                    </div>
                    <div>
                      <p className="m-0 fw-bold tx-black">Penny Tool</p>
                      <p className="m-0 tx-gray">Web Designer</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                  </div>
                </div>
                <p className="card-text">
                  Nunc valuate nil urn, id fermentum sem portico non volitant
                  leafed lorem, quiz poseur ipsum aliquot a. Morbi urn unique ac
                  herderite volutpatorca, pelletise in felis elemental fermentum
                  lobotids effector mi. nula denim orca, so dales at ante dales
                  ornate rises..
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-gray border-0 box-radius p-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center gap-1 mb-5">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div>
                      <img
                        className="rounded-circle"
                        src={images.pageOne.adminThree}
                        alt="admin"
                      />
                    </div>
                    <div>
                      <p className="m-0 fw-bold tx-black">Brian Cumin</p>
                      <p className="m-0 tx-gray">Indigo Violet</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                    <i className="fa-solid fa-star tx-yellow"></i>
                  </div>
                </div>
                <p className="card-text">
                  Lorem ipsum dolorArcu risus quis varius quam quisque id diam.
                  mauris consectetur adipiscing elit, sed do eiusm commodo
                  imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
