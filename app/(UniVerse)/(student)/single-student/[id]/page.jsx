import dynamic from "next/dynamic";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import Social from "@/components/candidates-single-pages/social/Social";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
import StudentResume from "../../components/StudentResume";
import { getData } from "@/utils/get-data/getData"
import { buildEndpoint } from "@/utils/buildEndpoint"
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage"
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";
import UserImage from "@/components/common/UserImage";
import DownloadCVButton from "@/components/common/DownloadCVButton";
import ShortlistItem from "@/components/common/ShortlistButton.jsx";
import RenderItemConditionally from "@/components/render/RenderItemConditionally";
import WebsiteURL from "@/app/(UniVerse)/components/shared/WebsiteURL";

export const metadata = {
    title:
        "Candidate Single Dyanmic V3 || Superio - Job Borad React NextJS Template",
    description: "Superio - Job Borad React NextJS Template",
};

const page = async ({ params }) => {
    const id = params.id;

    const { data: student, error } = await getData(buildEndpoint(studentEndPoints.getStudent, { id }), true, 0);

    if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

    console.log("student", student);

    return (
        <>
            {/* <!-- Header Span --> */}
            <span className="header-span"></span>

            <DefaulHeader />
            {/* <!--End Main Header --> */}

            <MobileMenu />
            {/* End MobileMenu */}

            {/* <!-- Job Detail Section --> */}
            <section className="candidate-detail-section style-three">
                <div className="upper-box">
                    <div className="auto-container">
                        <div className="candidate-block-six">
                            <div className="inner-box">
                                <figure className="image">
                                    <UserImage url={student.image} />
                                </figure>
                                <h4 className="name">{student.first_name} {student.last_name}</h4>
                                {student.university?.name && (
                                    <span className="designation">{student.university?.name}</span>
                                )}

                                <div className="content">
                                    {/* <ul className="post-tags">
                                        {candidate?.tags?.map((val, i) => (
                                            <li key={i}>{val}</li>
                                        ))}
                                    </ul> */}
                                    {/* End post-tags */}

                                    <ul className="candidate-info">
                                        {student?.phone && (
                                            <li>
                                                <span className="icon flaticon-phone"></span>
                                                {"0"}{student?.phone}
                                            </li>
                                        )}
                                        {student.department?.name && (
                                            <li className="time"><span className="icon flaticon-briefcase"></span>{student.department?.name}</li>
                                        )}
                                    </ul>
                                    {/* End candidate-info */}

                                    <div className="btn-box">
                                        {/* <DownloadCVButton /> */}
                                        <ShortlistItem />
                                    </div>
                                    {/* Download cv box */}
                                </div>
                                {/* End .content */}
                            </div>
                        </div>
                        {/*  <!-- Candidate block Five --> */}
                    </div>
                </div>
                {/* <!-- Upper Box --> */}

                <div className="candidate-detail-outer">
                    <div className="auto-container">
                        <div className="row">
                            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar">

                                    {/* End .sidebar-widget conadidate overview */}
                                    {student?.skills.length > 0 && (
                                        <div className="sidebar-widget">
                                            <h4 className="widget-title">Student Skills</h4>
                                            <div className="widget-content">
                                                <ul className="job-skills">
                                                    <JobSkills skills={student?.skills} />
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {(student?.github || student?.linkedin) && (
                                        <div className="sidebar-widget social-media-widget">
                                            <h4 className="widget-title">Social media</h4>
                                            <div className="widget-content">
                                                <div className="social-links">
                                                    <Social github={student?.github} linkedIn={student?.linkedin} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {student.portfolio && (
                                        <div className="sidebar-widget">
                                            <h4 className="widget-title">Profolio</h4>
                                            <WebsiteURL websiteURL={student?.portfolio} />
                                        </div>
                                    )}

                                    {/* End .sidebar-widget social-media-widget */}

                                </aside>
                                {/* End .sidebar */}
                            </div>
                            {/* End .sidebar-column */}

                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="job-detail">

                                    {/* <!-- student Resume Start --> */}
                                    <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
                                        <StudentResume id={id} />
                                    </Suspense>
                                    {/* <!-- student Resume End --> */}
                                </div>
                            </div>
                            {/* End .content-column */}
                        </div>
                    </div>
                </div>
                {/* <!-- job-detail-outer--> */}
            </section>
            {/* <!-- End Job Detail Section --> */}

            <FooterDefault footerStyle="alternate5" />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default dynamic(() => Promise.resolve(page), {
    ssr: true,
});


// student {
//     id: 1,
//     user: 1,
//     first_name: 'Nooraldeen',
//     last_name: 'Aloudat',
//     is_verified: true,
//     image: 'https://res.cloudinary.com/ddjiqvael/image/upload/v1735685944/umqo0yhhvn8qp54huhji.jpg',
//     phone: 776795866,
//     department: {
//       id: 2,
//       name: 'Information Technology (IT)',
//       icon: 'flaticon-web-programming'
//     },
//     university: {
//       id: 4,
//       name: 'Jordan University of Science and Technology',
//       address: null,
//       website_url: null,
//       contact_email: null,
//       contact_phone: null
//     },
//     date_of_birth: null,
//     github: 'https://github.com/noorodat',
//     linkedin: 'https://www.linkedin.com/in/nooraldeen-aloudat/',
//     portfolio: '',
//     skills: [
//       'Java',
//       'Python',
//       'Javascript',
//       'React.js',
//       'Frontend Development/Scripting',
//       'Problem Solving'
//     ]
//   }