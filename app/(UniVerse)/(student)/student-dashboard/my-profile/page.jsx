import dynamic from "next/dynamic";
import MyProfile from "@/app/(UniVerse)/(student)/student-dashboard/components/my-profile";
import { getData } from "@/utils/get-data/getData";
import universityEndPoints from "@/constants/endpoints/university/universityEndPoints";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

export const metadata = {
  title: "My Profile || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const universities = await getData(universityEndPoints.universities, true, 0);
  const departments = await getData(departmentEndPoints.departments, true, 0);

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <MyProfile universities={universities} departments={departments} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
