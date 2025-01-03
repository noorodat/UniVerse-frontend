import dynamic from "next/dynamic";
import AllApplicants from "@/app/(UniVerse)/(company)/components/company-dashboard/all-applicants";


export const metadata = {
  title: 'All Applicants || Superio - Job Borad React NextJS Template',
  description:
    'Superio - Job Borad React NextJS Template',

}



const index = () => {
  return (
    <>
      <AllApplicants />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
