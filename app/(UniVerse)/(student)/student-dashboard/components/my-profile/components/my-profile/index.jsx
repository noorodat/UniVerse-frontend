import FormInfoBox from "./FormInfoBox";
import AvatarUpload from "./AvatarUpload";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

const index = async ({ departments, universities }) => {
  return (
    <div className="widget-content">
      <AvatarUpload />
      <FormInfoBox universities={universities.data} departments={departments.data} />
      {/* compnay info box */}
    </div>
  );
};

export default index;
