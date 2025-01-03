import dynamic from "next/dynamic";
import AllApplicants from "@/app/(UniVerse)/(company)/components/company-dashboard/all-applicants";
import { getData } from "@/utils/getData";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";

export const metadata = {
    title: "All Applicants || Superio - Job Board React NextJS Template",
    description: "Superio - Job Board React NextJS Template",
};

const index = async ({ params }) => {

    const { id, job_title: encodedJobTitle } = params;
    const jobTitle = decodeURIComponent(encodedJobTitle);

    const { data: allApplicants, error } = await getData(buildEndpoint(jobEndPoints.showJobApplicants, { id }), true, 0);

    if (error) return <CustomErrorPage title={"Oops!"} description={"Something wrong happened!"} />;

    return (
        <>
            <Suspense fallback={<CustomSpinnerLoading />}>
                <AllApplicants allApplicants={allApplicants} jobTitle={jobTitle} />
            </Suspense>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
