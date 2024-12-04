import dynamic from "next/dynamic";
import CompanyProfile from "@/app/(UniVerse)/(company)/components/company-dashboard/company-profile";

export const metadata = {
  title: "Company Profile || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
