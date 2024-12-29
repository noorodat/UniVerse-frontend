import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardCandidatesSidebar from "../../../../../../components/header/DashboardCandidatesSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import Form from "./components/Form";
import DashboardCandidatesHeader from "../../../../../../components/header/DashboardHeader";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";

const index = () => {
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
          <BreadCrumb title="Change Email!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="ls-widget">
            <div className="widget-title">
              <div className="flex flex-column">
                <h4>Change Email</h4>
                <p className="text-red">Note: You will not access the website until you verify the new email.</p>
              </div>
            </div>
            <div className="widget-content">
              <Form />
            </div>
          </div>
          {/* <!-- Ls widget --> */}
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
