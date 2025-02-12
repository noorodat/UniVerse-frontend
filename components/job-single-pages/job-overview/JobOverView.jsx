import RenderItemConditionally from "@/components/render/RenderItemConditionally";
import { formatDate } from "@/utils/format/foramtDate";

const JobOverView = ({ overViewData }) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{formatDate(overViewData.createdAt, true)}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Status</h5>
          <span className={overViewData.isActive ? "text-success fw-bold" : "text-red fw-bold"}>{overViewData.isActive ? "Open" : "Closed"}</span>
        </li>
        <RenderItemConditionally item={overViewData?.city && overViewData?.country}>
          <li>
            <i className="icon icon-location"></i>
            <h5>Location:</h5>

            <span>{overViewData?.city}{", "}{overViewData?.country} </span>
          </li>
        </RenderItemConditionally>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{overViewData.title}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
