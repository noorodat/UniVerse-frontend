"use client"
import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardHeader from "../../../../../../components/header/DashboardHeader";
import DashboardEmployerSidebar from "../../../../../../components/header/DashboardEmployerSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import JobListingsTable from "./components/JobListingsTable";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@/contexts/UserContext";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";

const index = () => {

  const { id: companyId } = useUser();

  const jobsByCompanyUrl = buildEndpoint(jobEndPoints.jobsByCompany, { company_id: companyId });

  const { data: jobs, loading, error } = useFetch(jobsByCompanyUrl);

  if (loading) return <CustomSpinnerLoading />
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
          <BreadCrumb title="Manage jobs!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobListingsTable jobs={jobs} />
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
