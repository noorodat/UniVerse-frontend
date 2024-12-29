import dynamic from "next/dynamic";
import CvManager from "@/app/(UniVerse)/(student)/student-dashboard/components/cv-manager";
import { getData } from "@/utils/getData";
import cvEndPoints from "@/constants/endpoints/cv/cvEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";

export const metadata = {
  title: "CV Manager || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const { data: CVs, error } = await getData(cvEndPoints.CVs, true, 0);

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <Suspense fallback={<CustomSpinnerLoading />}>
      <CvManager CVs={CVs} />
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
