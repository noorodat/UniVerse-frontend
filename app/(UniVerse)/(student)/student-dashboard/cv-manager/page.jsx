import dynamic from "next/dynamic";
import CvManager from "@/app/(UniVerse)/(student)/components/student-dashboard/cv-manager";

export const metadata = {
  title: "CV Manager || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
