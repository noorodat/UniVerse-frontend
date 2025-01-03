"use client"
import Link from "next/link";
import Image from "next/image.js";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import { formatDate } from "@/utils/format/foramtDate";
import ResumeSectionModal from "@/app/(UniVerse)/(student)/student-dashboard/components/my-resume/components/ResumeSectionModal";
import { deleteJob } from "@/server-actions/job/actions";
import { toast } from "react-toastify";

const JobListingsTable = ({ jobs }) => {

  const handleDeleteJob = async (id) => {
    try {
      const res = await deleteJob(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Job Listings</h4>

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
          <table className="default-table manage-job-table">
            {jobs && jobs.length > 0 ? (
              <>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Applications</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((job, index) => (
                    console.log(job.created_at),
                    <tr key={job.id}>
                      <td>
                        {/* <!-- Job Block --> */}
                        <div className="job-block">
                          <div className="inner-box">
                            <div className="content">
                              <span className="company-logo">
                                <Image
                                  width={50}
                                  height={49}
                                  src={job.company.image || DEFAULT_USER_IMAGE}
                                  alt="logo"
                                />
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
                                {job.company.city && (
                                  <li>
                                    <span className="icon flaticon-map-locator"></span>
                                    {job.company.city}
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="applied">
                        <Link href={`/company-dashboard/all-applicants/${job.id}/${job.title}`}>Show applicants</Link>
                      </td>
                      <td>
                        {formatDate(job.created_at, true)}
                      </td>
                      <td className={`${job.status ? "status" : "text-red"}`}>{job.status ? "Active" : "Inactive"}</td>
                      <td>
                        <div className="option-box">
                          <ul className="option-list">
                            <li>
                              <Link
                                href={`/job-single/${job.id}`}
                                data-text="View Job"
                              >
                                <span className="la la-eye"></span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/company-dashboard/edit-job/${job.id}`}
                                data-text="Edit Job"
                              >
                                <span className="la la-pencil"></span>
                              </Link>
                            </li>
                            <li>
                              <button data-text="Delete Job">
                                <a
                                  href="#"
                                  className="theme-btn call-modal"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#delete-${index}job-${index}Modal`}
                                >
                                  <span className="la la-trash"></span>
                                </a>
                              </button>
                            </li>
                            <ResumeSectionModal
                              sectionType={`job`}
                              operation={`delete`}
                              onSubmit={handleDeleteJob}
                              index={index}
                              data={job}
                            />
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody></>
            ) : (
              <div>
                <Link href={'/company-dashboard/post-jobs'} className="theme-btn btn-style-three w-100"> Add your first job</Link>
              </div>
            )}
          </table>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
