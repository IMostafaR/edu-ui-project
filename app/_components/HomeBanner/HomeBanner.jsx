import Badge from "@/app/shared/Badge/Badge";
import { images } from "../../../public/index";
import Link from "next/link";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <>
      <section className="home-banner bg-light-blue rounded-5">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content mb-5 mb-lg-auto">
                <Badge text={"Online Learning Platform"} />
                <h1 className="fw-bold tx-black">
                  Master The Skills Drive Your Career.
                </h1>
                <p className="tx-gray mb-5">
                  Through a combination of lectures, readings, and discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
                <Link
                  className="btn bg-blue text-white fw-bold px-4 py-3"
                  href="/courses"
                >
                  View All Course
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative banner-img">
                <Image
                  className="img-fluid position-relative z-3"
                  src={images.pageOne.banner}
                  alt="female student"
                />
                <Image
                  className="position-absolute img-fluid z-0 end-0"
                  src={images.pageOne.ring}
                  alt="ring"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
