import CvManager from "@/app/(UniVerse)/(student)/student-dashboard/components/cv-manager";
import { getData } from "@/utils/getData";
import cvEndPoints from "@/constants/endpoints/cv/cvEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";

export const metadata = {
  title: "CV Manager || Superio - Job Board React NextJS Template",
  description: "Superio - Job Board React NextJS Template",
};

const Index = async () => {
  const { data: CVs, error } = await getData(cvEndPoints.CVs, true, 0);

  if (error)
    return <CustomErrorPage title={"Oops!"} description={"Something went wrong!"} />;

  return (
    <Suspense fallback={<CustomSpinnerLoading />}>
      <CvManager CVs={CVs} />
    </Suspense>
  );
};

export default Index;
