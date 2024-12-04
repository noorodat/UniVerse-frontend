import dynamic from "next/dynamic";
import ShortListedJobs from "@/app/(UniVerse)/(student)/components/student-dashboard/short-listed-jobs";

export const metadata = {
  title: "Short ListedJobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ShortListedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
