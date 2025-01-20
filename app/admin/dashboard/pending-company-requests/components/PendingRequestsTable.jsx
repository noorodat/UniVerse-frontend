"use client"
import Image from "next/image.js";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage.js";
import { formatDate } from "@/utils/format/foramtDate.js";
import CustomServerActionButton from "@/components/custom/buttons/CustomServerActionButton";
import CustomSpinnerLoadingButton from "@/components/custom/loading/CustomSpinnerLoadingButton";
import { acceptCompany, rejectCompany } from "@/server-actions/admin/company/actions";
import { toast } from "react-toastify";

const PendingRequestsTable = async ({ pendingReqs }) => {

  const handleAcceptRequest = async (id) => {
    try {
      const res = await acceptCompany(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleRejectRequest = async (id) => {
    try {
      const res = await rejectCompany(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Pending requests</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Request date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {pendingReqs.map((item) => (
                <tr key={item.id}>
                  <td>
                    {/* <!-- Job Block --> */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content d-flex align-items-center">
                          <span className="company-logo">
                            <Image
                              width={50}
                              height={49}
                              src={DEFAULT_USER_IMAGE}
                              alt="logo"
                            />
                          </span>
                          <h4>
                            <span>
                              {item.company.name}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {formatDate(item.company.created_at, true)}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <a href={item.company.proof_document} data-text="View Document" target="_blank">
                            <span className="la la-eye"></span>
                          </a>
                        </li>
                        <li>
                          <CustomServerActionButton
                            label={<span className="la la-check"></span>}
                            transitionFunction={() => handleAcceptRequest(item.id)}
                            pendingMessage={<CustomSpinnerLoadingButton />}
                            data-text="Accept Request"
                          />
                        </li>
                        <li>
                          <CustomServerActionButton
                            label={<span className="la la-trash"></span>}
                            transitionFunction={() => handleRejectRequest(item.id)}
                            pendingMessage={<CustomSpinnerLoadingButton />}
                            data-text="Reject Request"
                          />
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default PendingRequestsTable;
