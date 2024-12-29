import dynamic from "next/dynamic";
import ChangeEmail from "@/app/(UniVerse)/(student)/student-dashboard/components/change-email";

export const metadata = {
  title: "UniVerse || Change email",
  description: "Change your UniVerse email",
};

const index = () => {
  return (
    <>
      <ChangeEmail />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
