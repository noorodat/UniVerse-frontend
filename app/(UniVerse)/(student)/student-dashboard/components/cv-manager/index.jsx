"use client"
import MobileMenu from "../../../../../../components/header/MobileMenu";
import DashboardCandidatesSidebar from "../../../../../../components/header/DashboardCandidatesSidebar";
import BreadCrumb from "../../../../../../components/dashboard-pages/BreadCrumb";
import CopyrightFooter from "../../../../../../components/dashboard-pages/CopyrightFooter";
import CvUploader from "./components/CvUploader";
import DashboardCandidatesHeader from "../../../../../../components/header/DashboardHeader";
import MenuToggler from "../../../../../../components/dashboard-pages/MenuToggler";
import ResumeSectionModal from "../my-resume/components/ResumeSectionModal";
import { deleteCV } from "@/server-actions/cv/actions";
import { toast } from "react-toastify";

const index = async ({ CVs }) => {

  const handleDeleteCV = async (id) => {
    try {
      const res = await deleteCV(id);
      toast.success(res);
    } catch (error) {
      toast.error(error);
    }
  }

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
          <BreadCrumb title="CV Manager!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="cv-manager-widget ls-widget">
                <div className="widget-title">
                  <h4>My CVs</h4>
                </div>
                {/* End widget-title */}
                <div className="widget-content">
                  <div className="files-outer">
                    {CVs?.map((cv, i) => (
                      <div key={i} className="file-edit-box">
                        <ResumeSectionModal
                          sectionType={`CV`}
                          operation={`delete`}
                          onSubmit={handleDeleteCV}
                          index={i}
                          data={cv}
                        />
                        <a href={cv.file_url} target="_blank">
                          <span className="title">{cv.file_name}</span>
                        </a>
                        <div className="edit-btns d-flex gap-3">
                          <a
                            href="#"
                            className="theme-btn call-modal"
                            data-bs-toggle="modal"
                            data-bs-target={`#delete-${i}CV-${i}Modal`}
                          >
                            <span className="la la-trash"></span>
                          </a>
                          <button>
                            <a className="la la-eye" href={cv.file_url} target="_blank"></a>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <CvUploader />
                </div>
                {/* End widget-content */}
              </div>
              {/* End Ls widget */}
            </div>
            {/* End .col */}
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
