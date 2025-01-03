import UserImage from "@/components/common/UserImage.jsx";
import RenderItemConditionally from "@/components/render/RenderItemConditionally";
import { formatDate } from "@/utils/format/foramtDate";
import AppliedJobStatus from "@/components/job/shared/AppliedJobStatus";
import Link from "next/link.js";

const JobListingsTable = ({ appliedJobs }) => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {appliedJobs.slice(0, 4).map((job) => (
                  <tr key={job.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <UserImage url={job.company.image} />
                            </span>
                            <h4>
                              <Link href={`/job-single/${job.id}`}>
                                {job.title}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {job.company.name}
                              </li>
                              <RenderItemConditionally item={job.company.city && job.company.country}>
                                <li>
                                  <span className="icon flaticon-map-locator"></span>
                                  {job.company.city}, {job.company.country}
                                </li>
                              </RenderItemConditionally>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{formatDate(job.created_at, true)}</td>
                    <td className="status"><AppliedJobStatus status={job.application.status} /></td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <Link href={`/job-single/${job.id}`} data-text="View Job">
                              <span className="la la-eye"></span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
