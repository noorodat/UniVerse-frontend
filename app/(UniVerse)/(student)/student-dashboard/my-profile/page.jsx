import dynamic from "next/dynamic";
import MyProfile from "@/app/(UniVerse)/(student)/student-dashboard/components/my-profile";

export const metadata = {
  title: "My Profile || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
