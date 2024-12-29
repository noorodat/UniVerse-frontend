"use server"

import httpRequest from "@/utils/httpRequest";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import successMessages from "@/constants/feedbackMessages/job/successMessages";
import errorMessages from "@/constants/feedbackMessages/job/errorMessages";
import { buildEndpoint } from "@/utils/buildEndpoint";
import { revalidatePath } from "next/cache";

export async function postJob(payload) {
    try {
        const res = await httpRequest(jobEndPoints.jobPosts, "POST", payload, true, true);
        revalidatePath('company-dashboard/post-jobs', 'page');
        return res.detail || successMessages.jobCreated;
    } catch (error) {
        throw new Error(error.detail || errorMessages.jobCreated);
    }
}

export async function updateJob(payload, id) {
    try {
        const res = await httpRequest(buildEndpoint(jobEndPoints.singleJob, { id }), "PUT", payload, true, true);
        revalidatePath(`/job-single/${id}`);
        return res.detail || successMessages.jobUpdated;
    } catch (error) {
        throw new Error(error.detail || errorMessages.jobUpdated);
    }
}

export async function deleteJob(id) {
    try {
        await httpRequest(`${studentResumeEndpoints.deleteAward}${id}/`, "DELETE", null, true, false);
        revalidatePath('student-dashboard/my-resume', 'page');
        return successMessages.jobDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.jobDeleted);
    }
}