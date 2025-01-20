import Link from "next/link";
import Image from "next/image";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "../custom/errors/CustomErrorPage";

const StudentFeatured = async () => {

    const { data: students, error } = await getData(studentEndPoints.featuredStudents);
    if (error) {
        console.log("HERHERHEHREHRHERHEREHR", error);
        return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />
    }

    return (
        <>
            <section className="job-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Featured Students</h2>
                        <div className="text">
                            Meet the students shaping the future.
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        {students.map((student) => (
                            <div
                                className="job-block-three col-lg-4 col-md-6 col-sm-12"
                                key={student.id}
                            >
                                <div className="inner-box">
                                    <div className="content">
                                        <span className="company-logo">
                                            <Image
                                                width={50}
                                                height={50}
                                                src={student.image || DEFAULT_USER_IMAGE}
                                                alt="item brand"
                                            />
                                        </span>
                                        <h4>
                                            <Link href={`/single-student/${student.id}`}>{student.first_name} {" "} {student.last_name}</Link>
                                        </h4>

                                        {student?.university && (
                                            <ul className="job-info">
                                                <li>
                                                    <span className="icon flaticon-briefcase"></span>
                                                    {student.university?.name}
                                                </li>
                                                {/* university info */}
                                            </ul>
                                        )}
                                        {/* End .job-info */}

                                        {student?.department && (
                                            <ul className="job-other-info d-flex">
                                                <li className="time">{student.department?.name}</li>
                                            </ul>
                                        )}
                                        {/* End .job-other-info */}

                                        <button className="bookmark-btn">
                                            <span className="flaticon-bookmark"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            // End job-block
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudentFeatured;
