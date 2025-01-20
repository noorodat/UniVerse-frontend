import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";

export const metadata = {
  title: "Universe | Job List",
  description: "Superio - Job Board React NextJS Template",
};

const index = async ({ searchParams }) => {
  const { search, department } = searchParams;

  const isSearch = search || department;
  const endpoint = isSearch ? jobEndPoints.jobSearch : jobEndPoints.jobPosts;

  const jobEndpoint = new URLSearchParams();
  if (search) jobEndpoint.append("search", search);
  if (department) jobEndpoint.append("department", department);

  const { data: departments, error: departmentsError } = await getData(departmentEndPoints.departments);
  const { data: jobs, error: jobsError } = await getData(
    `${endpoint}?${jobEndpoint.toString()}`
  );

  if (jobsError || departmentsError) {
    return <CustomErrorPage title="Oops!" description="Something wrong happened!" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobList jobs={jobs} departments={departments} />
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
