"use server"

import httpRequest from "@/utils/httpRequest";
import studentResumeEndpoints from "@/constants/endpoints/resume/studentResumeEndpoints";
import successMessages from "@/constants/feedbackMessages/resume/successMessages";
import errorMessages from "@/constants/feedbackMessages/resume/errorMessages";
import { revalidatePath } from "next/cache";

export async function addAward(payload) {
    try {
        const res = await httpRequest(studentResumeEndpoints.addAward, "POST", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.awardAdded;
    } catch (error) {
        throw new Error(error.message || errorMessages.awardAdded);
    }
}

export async function updateAward(payload, id) {
    try {
        const res = await httpRequest(`${studentResumeEndpoints.updateAward}${id}/`, "PUT", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.awardUpdated;
    } catch (error) {
        throw new Error(error.message || errorMessages.awardUpdated);
    }
}

export async function deleteAward(id) {
    try {
        await httpRequest(`${studentResumeEndpoints.deleteAward}${id}/`, "DELETE", null, true, false);
        revalidatePath('student-dashboard/my-resume', 'page');
        return successMessages.awardDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.awardDeleted);
    }
}