import dynamic from "next/dynamic";
import EditJob from "@/app/(UniVerse)/(company)/components/company-dashboard/edit-job";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { buildEndpoint } from "@/utils/buildEndpoint";

export const metadata = {
  title: "UniVerse || Edit Job",
  description: "Edit your job here.",
};

const index = async ({ params }) => {

  const id = params.id;

  const { data: departments, error: departmentsError } = await getData(departmentEndPoints.departments);
  const { data: job, error: jobError } = await getData(buildEndpoint(jobEndPoints.singleJob, { id }), true, 0);
  if (departmentsError || jobError) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <EditJob job={job} departments={departments} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
