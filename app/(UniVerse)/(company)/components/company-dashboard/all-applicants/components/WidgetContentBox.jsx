"use client"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { approveApplication, rejectApplication, deleteApplication } from "@/server-actions/job/actions";
import { toast } from "react-toastify";
import { ApplicationsList } from "./ApplicationsList";

const WidgetContentBox = ({ allApplicants, jobTitle }) => {
  const groupedApplicants = {
    Pending: allApplicants.filter(applicant => applicant.status === "Pending"),
    Approved: allApplicants.filter(applicant => applicant.status === "Approved"),
    Rejected: allApplicants.filter(applicant => applicant.status === "Rejected"),
  };

  const handlers = {
    handleApproveApplication: async (id) => {
      const payload = { status: "Approved" }
      try {
        const res = await approveApplication(payload, id);
        toast.success(res);
      } catch (error) {
        toast.error(error.message);
      }
    },

    handleRejectApplication: async (id) => {
      const payload = { status: "Rejected" }
      try {
        const res = await rejectApplication(payload, id);
        toast.success(res);
      } catch (error) {
        toast.error(error.message);
      }
    },

    handleDeleteApplication: async (id) => {
      try {
        const res = await deleteApplication(id);
        toast.success(res);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>Job title: {jobTitle}</h6>
            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals text-warning">
                Pending(s): {groupedApplicants.Pending.length}
              </Tab>
              <Tab className="tab-btn approved">
                Approved: {groupedApplicants.Approved.length}
              </Tab>
              <Tab className="tab-btn rejected">
                Rejected(s): {groupedApplicants.Rejected.length}
              </Tab>
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <ApplicationsList
                applicants={groupedApplicants.Pending}
                handlers={handlers}
                type="Pending"
              />
            </TabPanel>
            <TabPanel>
              <ApplicationsList
                applicants={groupedApplicants.Approved}
                handlers={handlers}
                type="Approved"
              />
            </TabPanel>
            <TabPanel>
              <ApplicationsList
                applicants={groupedApplicants.Rejected}
                handlers={handlers}
                type="Rejected"
              />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WidgetContentBox;