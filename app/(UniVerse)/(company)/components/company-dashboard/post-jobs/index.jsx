import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardHeader from "../../../../../../components/header/DashboardHeader";
import DashboardEmployerSidebar from "../../../../../../components/header/DashboardEmployerSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import PostJobSteps from "./components/PostJobSteps";
import PostBoxForm from "./components/PostBoxForm";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";
import { getData } from "@/utils/getData";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

const index = async () => {

  const { data: departments, error } = await getData(departmentEndPoints.departments);
  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />


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
          <BreadCrumb title="Post a New Job!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Post a Job</h4>
                  </div>

                  <div className="widget-content">
                    {/* <PostJobSteps /> */}
                    {/* End job steps form */}
                    <Suspense fallback={<CustomSpinnerLoading />}>
                      <PostBoxForm departments={departments} />
                    </Suspense>
                    {/* End post box form */}
                  </div>
                </div>
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
