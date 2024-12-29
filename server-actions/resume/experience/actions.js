"use server"

import httpRequest from "@/utils/httpRequest";
import studentResumeEndpoints from "@/constants/endpoints/resume/studentResumeEndpoints";
import successMessages from "@/constants/feedbackMessages/resume/successMessages";
import errorMessages from "@/constants/feedbackMessages/resume/errorMessages";
import { revalidatePath } from "next/cache";

export async function addExperience(payload) {
    try {
        const res = await httpRequest(studentResumeEndpoints.addExperience, "POST", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.experienceAdded;
    } catch (error) {
        throw new Error(error.detail || errorMessages.experienceAdded);
    }
}

export async function updateExperience(payload, id) {
    try {
        const res = await httpRequest(`${studentResumeEndpoints.updateExperience}${id}/`, "PUT", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.experienceUpdated;
    } catch (error) {
        throw new Error(error.detail || errorMessages.experienceUpdated);
    }
}

export async function deleteExperience(id) {
    try {
        await httpRequest(`${studentResumeEndpoints.deleteExperience}${id}/`, "DELETE", null, true, false);
        revalidatePath('student-dashboard/my-resume', 'page');
        return successMessages.experienceDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.experienceDeleted);
    }
}