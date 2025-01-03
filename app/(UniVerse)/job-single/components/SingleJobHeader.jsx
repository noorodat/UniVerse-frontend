import Image from "next/image";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import SaveJobButton from "@/components/job/shared/SaveJobButton";
import ApplyForJobOrEditButton from "@/components/job/shared/ApplyForJobOrEditButton";
import ApplyForJobModal from "@/components/job/shared/ApplyForJobModal";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";


export default function SingleJobHeader({ company, jobData, department }) {
    console.log(jobData);
    return (
        <div className="upper-box">
            <div className="auto-container">
                <div className="job-block-seven">
                    <div className="inner-box">
                        <div className="content">
                            <span className="company-logo">
                                <Image
                                    width={100}
                                    height={98}
                                    src={company?.image || DEFAULT_USER_IMAGE}
                                    alt="logo"
                                />
                            </span>
                            <h4>{jobData.title}</h4>

                            <ul className="job-info">
                                <li>
                                    <span className="icon flaticon-briefcase"></span>
                                    {company.name}
                                </li>
                                {/* compnay info */}
                                {company?.city && company?.country && (
                                    <li>
                                        <span className="icon flaticon-map-locator"></span>
                                        {company?.city} {", "} {company?.country}
                                    </li>
                                )}
                                {/* location info */}
                                {jobData?.salaryRange && (
                                    <li>
                                        <span className="icon flaticon-money"></span>{" "}
                                        {jobData?.salaryRange} JOD
                                    </li>
                                )}
                                {/* salary info */}
                            </ul>
                            {/* End .job-info */}
                            {jobData?.type && department && (
                                <ul ul class="job-other-info">
                                    <li class="time">{jobData.type}</li>
                                    <li class="privacy">{department}</li>
                                </ul>
                            )}
                        </div>
                        {/* End .content */}

                        <div className="btn-box">
                            <ApplyForJobOrEditButton companyID={company.id} status={jobData.status} jobId={jobData.jobId} />
                            <SaveJobButton />
                        </div>
                        {/* End apply for job btn */}

                        {/* <!-- Modal --> */}
                        <Suspense fallback={<CustomSpinnerLoading />}>
                            <ApplyForJobModal jobId={jobData.jobId} />
                        </Suspense>
                        {/* End .modal */}
                    </div>
                </div>
                {/* <!-- Job Block --> */}
            </div>
        </div >
    )
}
