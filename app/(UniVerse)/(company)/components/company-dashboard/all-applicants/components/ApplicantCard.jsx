"use client"
import Link from "next/link";
import UserImage from "@/components/common/UserImage";

export const ApplicantCard = ({ applicant, actions }) => {
    console.log(applicant);
    return (
        <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
                <div className="content">
                    <figure className="image">
                        <UserImage url={applicant.student.image} width={90} height={90} />
                    </figure>
                    <h4 className="name">
                        <Link href={`/single-student/${applicant.student.id}`}>
                            {applicant.student.first_name} {applicant.student.last_name}
                        </Link>
                    </h4>
                    <ul className="candidate-info">
                        <li>
                            <span className="icon flaticon-map-locator"></span>{" "}
                            {applicant.student.university}
                        </li>
                    </ul>
                    <ul className="job-other-info d-flex">
                        <li className="time">{applicant.student.department}</li>
                    </ul>
                </div>
                <div className="option-box">
                    <ul className="option-list">
                        <li>
                            <Link href={applicant.resume} target="_blank" data-text="View Application">
                                <span className="la la-eye"></span>
                            </Link>
                        </li>
                        {actions}
                    </ul>
                </div>
            </div>
        </div>
    );
};