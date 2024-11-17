import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list";

export const metadata = {
  title: "Universe | Job List",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
