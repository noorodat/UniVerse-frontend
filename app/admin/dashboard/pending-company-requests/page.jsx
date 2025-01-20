import dynamic from "next/dynamic";
import PendingRequests from "./components/PendingRequests";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";
import { getData } from "@/utils/get-data/getData";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { Suspense } from "react";

export const metadata = {
    title: "Manage Jobs || Superio - Job Borad React NextJS Template",
    description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

    const {data: pendingReqs, error} = await getData(companyEndPoints.getSignupPendingRequests, true, 0);

    if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

    return (
        <>
            <PendingRequests pendingReqs={pendingReqs} />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });