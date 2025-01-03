import dynamic from "next/dynamic";
import DashboadHome from "@/app/(UniVerse)/(company)/components/company-dashboard/dashboard";

export const metadata = {
  title: "Employeers Dashboard || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
