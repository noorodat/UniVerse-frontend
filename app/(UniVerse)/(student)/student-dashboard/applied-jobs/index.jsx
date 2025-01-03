import MobileMenu from "../../../../../components/header/MobileMenu";
import DashboardCandidatesHeader from "../../../../../components/header/DashboardHeader";
import DashboardCandidatesSidebar from "../../../../../components/header/DashboardCandidatesSidebar";
import BreadCrumb from "../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../components/dashboard-pages/CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../../../../components/dashboard-pages/MenuToggler";

const index = ({ appliedJobs }) => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Applied jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable appliedJobs={appliedJobs} />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;