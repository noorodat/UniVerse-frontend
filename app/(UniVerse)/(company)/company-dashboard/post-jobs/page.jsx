import dynamic from "next/dynamic";
import PostJob from "@/app/(UniVerse)/(company)/components/company-dashboard/post-jobs";

export const metadata = {
  title: "Post Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
