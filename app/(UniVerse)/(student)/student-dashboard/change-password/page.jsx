import dynamic from "next/dynamic";
import ChangePassword from "@/app/(UniVerse)/(student)/student-dashboard/components/change-password";

export const metadata = {
  title: "Change password || UniVerse",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
