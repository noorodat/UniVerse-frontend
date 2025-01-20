import SearchForm2 from "@/components/common/job-search/SearchForm2";
import ImageBox from "./ImageBox";

const index = ({ departments }) => {
  return (
    <section className="banner-section-three">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="title-box" data-aos="fade-up">
                <h3>
                  Explore Jobs for university <br /> students in Jordan.
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form-two"
                data-aos-delay="500"
                data-aos="fade-up"
              >
                <SearchForm2 departments={departments} />
              </div>
            </div>
          </div>

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
