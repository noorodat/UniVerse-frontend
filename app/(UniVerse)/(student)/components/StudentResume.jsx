import React from "react";
import Education from "../student-dashboard/components/my-resume/components/education/Education";
import Experiences from "../student-dashboard/components/my-resume/components/experience/Experiences";
import Awards from "../student-dashboard/components/my-resume/components/award/Awards";
import { getData } from "@/utils/get-data/getData";
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
            {studentResumeInfo?.educations.length > 0 && (
                <Education educations={studentResumeInfo.educations} editable={false} />
            )}
            {studentResumeInfo?.experiences.length > 0 && (
                <Experiences experiences={studentResumeInfo.experiences} editable={false} />
            )}
            {studentResumeInfo?.awards.length > 0 && (
                <Awards awards={studentResumeInfo.awards} editable={false} />
            )}
        </div>
    );
}
