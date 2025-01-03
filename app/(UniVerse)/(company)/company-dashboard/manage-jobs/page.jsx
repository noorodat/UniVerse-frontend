import dynamic from "next/dynamic";
import ManageJobs from "@/app/(UniVerse)/(company)/components/company-dashboard/manage-jobs";

export const metadata = {
  title: "Manage Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ManageJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
