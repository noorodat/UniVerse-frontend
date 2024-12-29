import FormInfoBox from "./FormInfoBox";
import AvatarUpload from "./AvatarUpload";
import { getData } from "@/utils/getData";
import universityEndPoints from "@/constants/endpoints/university/universityEndPoints";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

const index = async () => {
  const universities = await getData(universityEndPoints.universities, false);
  const departments = await getData(departmentEndPoints.departments, false);
  return (
    <div className="widget-content">
      <AvatarUpload />
      {/* End logo and cover photo components */}

      <Suspense fallback={<CustomSpinnerLoading />}>
        <FormInfoBox universities={universities.data} departments={departments.data} />
      </Suspense>
      {/* compnay info box */}
    </div>
  );
};

export default index;
