import dynamic from "next/dynamic";
import ShortlistedResumes from "@/app/(UniVerse)/(company)/components/company-dashboard/shortlisted-resumes";

export const metadata = {
  title: "Shortlisted Resumes || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ShortlistedResumes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
