import dynamic from "next/dynamic";
import ChangePassword from "@/app/(UniVerse)/(company)/components/company-dashboard/change-password";

export const metadata = {
  title: "Change Password || UniVerse",
  description: "Change your UniVerse password",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
