import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list";
import { getData } from "@/utils/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { buildEndpoint } from "@/utils/buildEndpoint";

export const metadata = {
    title: "Universe | Job List",
    description: "Superio - Job Borad React NextJS Template",
};

const index = async ({ params }) => {
    const { id } = params;

    const { data: jobs, error } = await getData(buildEndpoint(departmentEndPoints.getJobsByDepartment, { id }), true, 0)
    if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

    return (
        <>
            <Suspense fallback={<CustomSpinnerLoading />}>
                <JobList jobs={jobs} />
            </Suspense>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
