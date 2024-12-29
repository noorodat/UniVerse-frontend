import dynamic from "next/dynamic";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import JobOverView from "@/components/job-single-pages/job-overview/JobOverView";
import JobSkills from "@/components/job-single-pages/shared-components/JobSkills";
import JobDetailsDescriptions from "@/components/job/single-job/JobDetailsDescriptions";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import SingleJobHeader from "../components/SingleJobHeader";
import { getData } from "@/utils/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CompanyInfoWedgit from "@/components/job/single-job/CompanyInfoWedgit";

export const metadata = {
  title: "UniVerse",
  description: "Job single here",
};

const SignleJob = async ({ params }) => {

  const jobID = params.id;

  const { data: job, error } = await getData(buildEndpoint(jobEndPoints.singleJob, { id: jobID }));
  const { company, department } = job;

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section">
        <SingleJobHeader
          company={company}
          jobData={{ title: job.title, type: job.type, salaryRange: job.salary_range, jobId: job.id }}
          department={department.name}
        />
        {/* <!-- Upper Box --> */}  

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions jobData={{ description: job.description, requirements: job.requirements }} />
                {/* End jobdetails content */}
                {/* 
                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Related Jobs</h3>
                    <div className="text">
                      2020 jobs live - 293 added today.
                    </div>
                  </div>

                  <RelatedJobs />
                </div> */}
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    {/* <!-- Job Overview --> */}
                    <h4 className="widget-title">Job Overview</h4>
                    <JobOverView overViewData={{ title: job.title, createdAt: job.created_at, country: company.country, city: company.city, status: job.status }} />

                    <h4 className="widget-title mt-5">Job Skills</h4>
                    <div className="widget-content">
                      <JobSkills skills={job.tags} />
                    </div>
                    {/* <!-- Job Skills --> */}
                  </div>
                  {/* End .sidebar-widget */}

                  <CompanyInfoWedgit company={company} />
                  {/* End .company-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
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

export default dynamic(() => Promise.resolve(SignleJob), {
  ssr: false,
});
