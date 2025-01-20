import Link from "next/link";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import Image from "next/image";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";

const JobFeatured = async () => {

  const { data: jobs, error } = await getData(jobEndPoints.featuredJobs, true, 0);

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      {jobs.length > 0 && (
        <section className="job-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h2>Featured Jobs</h2>
              <div className="text">
                Know your worth and find the job that qualifies your life.
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              {jobs.map((job) => (
                <div
                  className="job-block-three col-lg-4 col-md-6 col-sm-12"
                  key={job.id}
                >
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <Image
                          width={50}
                          height={50}
                          src={job.company.image || DEFAULT_USER_IMAGE}
                          alt="item brand"
                        />
                      </span>
                      <h4>
                        <Link href={`/job-single/${job.id}`}>{job.title}</Link>
                      </h4>

                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>
                          {job.company.name}
                        </li>
                        {/* compnay info */}
                        <li>
                          <span className="icon flaticon-map-locator"></span>
                          {job.company.country}
                        </li>
                        {/* location info */}
                      </ul>
                      {/* End .job-info */}

                      {job?.type && (
                        <ul ul className="job-other-info d-flex">
                          <li className="time">{job.type}</li>
                        </ul>
                      )}
                      {/* End .job-other-info */}

                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default JobFeatured;
