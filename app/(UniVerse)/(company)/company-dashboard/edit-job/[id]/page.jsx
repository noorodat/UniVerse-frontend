import dynamic from "next/dynamic";
import EditJob from "@/app/(UniVerse)/(company)/components/company-dashboard/edit-job";

export const metadata = {
  title: "UniVerse || Edit Job",
  description: "Edit your job here.",
};

const index = ({ params }) => {
  const id = params.id;
  return (
    <>
      <EditJob id={id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
