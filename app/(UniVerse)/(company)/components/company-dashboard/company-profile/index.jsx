import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardEmployerSidebar from "../../../../../../components/header/DashboardEmployerSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import MyProfile from "./components/my-profile";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";

const index = () => {
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>
            {/* <!-- Header Span for hight --> */}

            <DashboardHeader />
            {/* End Header */}

            <MobileMenu />
            {/* End MobileMenu */}

            <DashboardEmployerSidebar />
            {/* <!-- End User Sidebar Menu --> */}

            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <BreadCrumb title="Company Profile!" />
                    {/* breadCrumb */}

                    <MenuToggler />
                    {/* Collapsible sidebar button */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="tabs-box">
                                    <div className="widget-title">
                                        <h4>My Profile</h4>
                                    </div>
                                    <MyProfile />
                                </div>
                            </div>
                            {/* <!-- Ls widget --> */}
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
