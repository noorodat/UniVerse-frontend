import MobileMenu from "@/components/header/MobileMenu";

import DashboardEmployerSidebar from "@/components/header/DashboardEmployerSidebar";
import BreadCrumb from "@/components/dashboard-pages/BreadCrumb";
import TopCardBlock from "@/app/(UniVerse)/(company)/components/company-dashboard/dashboard/components/TopCardBlock";

import CopyrightFooter from "@/components/dashboard-pages/CopyrightFooter";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
import DashboardHeader from "./DashboardHeader";
import DashboardAdminSidebar from "./DashboardAdminSidebar";

const DashboardHome = () => {
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
                    <BreadCrumb title="Dashboard Home!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

                    <div className="row">
                        <TopCardBlock />
                    </div>
                    {/* End .row top card block */}
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

export default DashboardHome;
