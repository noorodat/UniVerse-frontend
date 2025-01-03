import dynamic from "next/dynamic";
import ResumeAlerts from "@/app/(UniVerse)/(company)/components/company-dashboard/resume-alerts";

export const metadata = {
  title: "Resume Alerts || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ResumeAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
