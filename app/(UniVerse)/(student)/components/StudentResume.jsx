import React from "react";
import Education from "../student-dashboard/components/my-resume/components/education/Education";
import Experiences from "../student-dashboard/components/my-resume/components/experience/Experiences";
import Awards from "../student-dashboard/components/my-resume/components/award/Awards";
import { getData } from "@/utils/getData";
import { buildEndpoint } from "@/utils/buildEndpoint";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import studentResumeEndpoints from "@/constants/endpoints/resume/studentResumeEndpoints";

export default async function StudentResume({ id }) {
    const { data: studentResumeInfo, error } = await getData(
        buildEndpoint(studentResumeEndpoints.getResumeInfo, { id }),
        true,
        0
    );

    if (error) return <CustomErrorPage title="Oops!" description="Something wrong happened!" />;

    return (
        <div>
            <Education educations={studentResumeInfo.educations} editable={false} />
            <Experiences experiences={studentResumeInfo.experiences} editable={false} />
            <Awards awards={studentResumeInfo.awards} editable={false} />
        </div>
    );
}
