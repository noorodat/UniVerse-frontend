import dynamic from "next/dynamic";
import AppliedJobs from "@/app/(UniVerse)/(student)/student-dashboard/applied-jobs";
import { getData } from "@/utils/get-data/getData";
import { getCookie } from "@/utils/getCookie";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";

export const metadata = {
  title: "Applied Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const userId = await getCookie("user_id");
  const { data: appliedJobs, error } = await getData(buildEndpoint(jobEndPoints.studentAppliedJobs, { id: userId }), true, 0);
  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  console.log("appliedJobsappliedJobsappliedJobsappliedJobsappliedJobs");
  console.log(appliedJobs);
  console.log("appliedJobsappliedJobsappliedJobsappliedJobsappliedJobs");

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <AppliedJobs appliedJobs={appliedJobs} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
