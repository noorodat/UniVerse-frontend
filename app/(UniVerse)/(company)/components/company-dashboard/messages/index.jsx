
'use client'
import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardHeader from "../../../../../../components/header/DashboardHeader";
import DashboardEmployerSidebar from "../../../../../../components/header/DashboardEmployerSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import ChatBox from "./components";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";
import { useSelector } from "react-redux";

const Index = () => {
  const { chatSidebar } = useSelector((state) => state.toggle);
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
          <BreadCrumb title="Messages!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div
              className={`col-lg-12 ${chatSidebar ? "active-chat-contacts" : ""
                }`}
            >
              <div className="chat-widget">
                <div className="widget-content">
                  <ChatBox />
                </div>
              </div>
              {/* <!-- Chat Widget --> */}
            </div>
          </div>
          {/* End row */}
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

export default Index;
