import dynamic from "next/dynamic";
import employersInfo from "@/data/topCompany";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import JobDetailsDescriptions from "@/components/employer-single-pages/shared-components/JobDetailsDescriptions";
import RelatedJobs from "@/components/employer-single-pages/related-jobs/RelatedJobs";
import Social from "@/components/employer-single-pages/social/Social";
import Image from "next/image";
import { getData } from "@/utils/getData";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";
import UserImage from "@/components/common/UserImage";
import WebsiteURL from "@/app/(UniVerse)/components/shared/WebsiteURL";

export const metadata = {
  title:
    "Employers Single Dyanmic V1 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const EmployersSingleV1 = async ({ params }) => {

  const id = params.id;

  const { data: company, error } = await getData(buildEndpoint(companyEndPoints.getCompanyInfo, { id }), true, 0);

  const employer =
    employersInfo.find((item) => item.id == id) || employersInfo[0];

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <Suspense fallback={<CustomSpinnerLoading />}>
        <section className="job-detail-section">
          {/* <!-- Upper Box --> */}
          <div className="upper-box">
            <div className="auto-container">
              <div className="job-block-seven">
                <div className="inner-box">
                  <div className="content">
                    <span className="company-logo">
                      <UserImage url={company?.image} />
                    </span>
                    <h4>{company?.name}</h4>

                    <ul className="job-info">
                      <li>
                        <span className="icon flaticon-map-locator"></span>
                        {company?.city} {", "} {company?.country}
                      </li>
                      {/* compnay info */}
                      <li>
                        <span className="icon flaticon-briefcase"></span>
                        {company?.industry}
                      </li>
                      {/* location info */}
                      <li>
                        <span className="icon flaticon-telephone-1"></span>
                        {company?.phone}
                      </li>
                      {/* time info */}
                      <li>
                        <span className="icon flaticon-mail"></span>
                        {company?.email}
                      </li>
                      {/* salary info */}
                    </ul>
                    {/* End .job-info */}
                  </div>
                  {/* End .content */}

                  <div className="btn-box">
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div>
                  {/* End btn-box */}
                </div>
              </div>
              {/* <!-- Job Block --> */}
            </div>
          </div>
          {/* <!-- Upper Box --> */}

          {/* <!-- job-detail-outer--> */}
          <div className="job-detail-outer">
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  {/*  job-detail */}
                  <JobDetailsDescriptions />
                  {/* End job-detail */}

                  {/* <!-- Related Jobs --> */}
                  <div className="related-jobs">
                    <div className="title-box">
                      <h3>Related Jobs</h3>
                    </div>
                    {/* End .title-box */}

                    <RelatedJobs company={company} />
                    {/* End RelatedJobs */}
                  </div>
                  {/* <!-- Related Jobs --> */}
                </div>
                {/* End .content-column */}

                <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar">
                    <div className="sidebar-widget company-widget">
                      <div className="widget-content">
                        {/*  compnay-info */}
                        <ul className="company-info mt-0">
                          <li>
                            Primary industry: <span>{company?.industry}</span>
                          </li>
                          <li>
                            Phone: <span>{company?.phone}</span>
                          </li>
                          <li>
                            Email: <span>{company?.email}</span>
                          </li>
                          <li>
                            Location: <span>{company?.city}, { } {company?.country}</span>
                          </li>
                        </ul>
                        {/* End compnay-info */}

                        <WebsiteURL websiteURL={company.website_url} />
                        {/* btn-box */}
                      </div>
                    </div>
                    {/* End company-widget */}
                    {/* End sidebar-widget */}
                  </aside>
                  {/* End .sidebar */}
                </div>
                {/* End .sidebar-column */}
              </div>
            </div>
          </div>
          {/* <!-- job-detail-outer--> */}
        </section>
      </Suspense>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(EmployersSingleV1), {
  ssr: true,
});
