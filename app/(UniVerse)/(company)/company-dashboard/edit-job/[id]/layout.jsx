"use client";
import { useUser } from "@/contexts/UserContext";
import useFetch from "@/hooks/useFetch";
import { buildEndpoint } from "@/utils/buildEndpoint";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditJobLayout({ params, children }) {
    const router = useRouter();
    const jobId = params.id;
    const { id: userId, userType } = useUser();
    const [isChecked, setIsChecked] = useState(false);

    const { data, loading, error } = useFetch(
        buildEndpoint(jobEndPoints.singleJob, { id: jobId })
    );

    useLayoutEffect(() => {
        if (!loading && !error) {
            if (data?.company?.id !== userId && userType !== "company") {
                router.push("/");
            } else {
                setIsChecked(true);
            }
        }
    }, [data, loading, error, userId, router]);

    if (loading) return <CustomSpinnerLoading />;
    if (error) return <CustomErrorPage title="Oops!" description="Something wrong happened!" />;
    if (!isChecked) return <CustomSpinnerLoading />;

    return <>{children}</>;
}