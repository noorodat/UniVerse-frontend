import dynamic from "next/dynamic";
import AllApplicants from "@/app/(UniVerse)/(company)/components/company-dashboard/all-applicants";
import { getData } from "@/utils/get-data/getData";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { getCookie } from "@/utils/getCookie";
import { Suspense } from "react";

export const metadata = {
  title: "All Applicants || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const id = await getCookie("user_id");

  const { data: allApplicants, error } = await getData(buildEndpoint(jobEndPoints.showAllApplicantsByCompany, { id }), true, 0);

  console.log("allApplicantsallApplicantsallApplicantsallApplicantsallApplicants");
  console.log(allApplicants);
  console.log("allApplicantsallApplicantsallApplicantsallApplicantsallApplicants");


  if (error) return <CustomErrorPage title={"Oops!"} description={"Something wrong happened!"} />;

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <AllApplicants allApplicants={allApplicants} jobTitle="All applicants" />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
