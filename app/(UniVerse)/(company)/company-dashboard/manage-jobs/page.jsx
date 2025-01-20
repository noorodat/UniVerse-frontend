import dynamic from "next/dynamic";
import ManageJobs from "@/app/(UniVerse)/(company)/components/company-dashboard/manage-jobs";
import { getData } from "@/utils/get-data/getData";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";
import { getCookie } from "@/utils/getCookie";

export const metadata = {
  title: "Manage Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const id = await getCookie("user_id");

  const { data: jobs, error } = await getData(buildEndpoint(jobEndPoints.jobsByCompany, { company_id: id }), true, 0);

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <ManageJobs jobs={jobs} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });