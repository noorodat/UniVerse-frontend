import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardCandidatesSidebar from "../../../../../../components/header/DashboardCandidatesSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import Resume from "./components";
import DashboardCandidatesHeader from "../../../../../../components/header/DashboardHeader";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

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
          <BreadCrumb title="My Resume!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Resume</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <Suspense fallback={<CustomSpinnerLoading />}>
                      <Resume />
                    </Suspense>
                  </div>
                  {/* End widget-content */}
                </div>
              </div>
              {/* End ls-widget */}
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
