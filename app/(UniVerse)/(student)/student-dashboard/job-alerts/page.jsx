import dynamic from "next/dynamic";
import JobAlerts from "@/app/(UniVerse)/(student)/student-dashboard/components/job-alerts";

export const metadata = {
  title: "My Job Alerts || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
