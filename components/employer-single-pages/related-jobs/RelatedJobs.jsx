import Link from "next/link";
import UserImage from "@/components/common/UserImage";

const RelatedJobs = ({ company }) => {

  const { random_jobs: realatedJobs } = company;

  return (
    <>
      {realatedJobs.map((job) => (
        <div className="job-block" key={job.id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <UserImage url={company.image} />
              </span>
              <h4>
                <Link href={`/job-single/${job.id}`}>{job.title}</Link>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {company.name}
                </li>
                {/* compnay info */}
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {company.city} {", "} {company.country}
                </li>
                {/* location info */}
              </ul>
              {/* End .job-info */}

              <ul className="job-other-info">
                <li className="time">
                  {job.type}
                </li>
              </ul>
              {/* End .job-other-info */}
              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedJobs;
