import dynamic from "next/dynamic";
import Messages from "@/app/(UniVerse)/(student)/components/student-dashboard/messages";

export const metadata = {
  title: "Messages || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
