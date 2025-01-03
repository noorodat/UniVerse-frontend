import dynamic from "next/dynamic";
import PostJob from "@/app/(UniVerse)/(company)/components/company-dashboard/post-jobs";
import { getData } from "@/utils/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

export const metadata = {
  title: "Post Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const { data: departments, error } = await getData(departmentEndPoints.departments);
  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <PostJob departments={departments} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
