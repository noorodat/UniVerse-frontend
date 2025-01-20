import MobileMenu from "@/components/header/MobileMenu";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardAdminSidebar from "../../components/DashboardAdminSidebar";
import BreadCrumb from "@/components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import PendingRequestsTable from "./PendingRequestsTable";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";

const PendingRequests = ({ pendingReqs }) => {
  console.log(pendingReqs)
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardAdminSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Pending requests!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <PendingRequestsTable pendingReqs={pendingReqs} />
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

export default PendingRequests;
