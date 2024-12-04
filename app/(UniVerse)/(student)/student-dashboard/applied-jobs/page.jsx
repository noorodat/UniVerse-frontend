import dynamic from "next/dynamic";
import AppliedJobs from "@/app/(UniVerse)/(student)/components/student-dashboard/applied-jobs";

export const metadata = {
  title: "Applied Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <AppliedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
