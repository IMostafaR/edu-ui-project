import TeacherCard from "@/app/shared/TeacherCard/TeacherCard";
import { images } from "../../../public/index";
import Link from "next/link";
import Image from "next/image";

export default function AboutTeachers() {
  return (
    <>
      <section className="pt-120">
        <div className="container">
          <div className="row g-3 mb-5">
            <div className="col-xl-6 col-lg-8 col-md-12 align-items-stretch">
              <div className="instructor box-radius d-flex justify-content-center flex-column p-5">
                <h2 className="fw-bold fs-1 mb-5 line tx-black">
                  Our Most <br />
                  Experience
                  <span className="position-relative ms-2">
                    Professor
                    <Image
                      className="position-absolute"
                      src={images.underline}
                      alt="line"
                    />
                  </span>
                </h2>

                <div>
                  <Link
                    className="btn bg-blue px-3 py-2 text-white fw-bold text-decoration-none"
                    href="/signup"
                  >
                    Become An Instructor
                  </Link>
                </div>
              </div>
            </div>
            <TeacherCard />
          </div>
        </div>
      </section>
    </>
  );
}
