"use server"

import httpRequest from "@/utils/httpRequest";
import studentResumeEndpoints from "@/constants/endpoints/resume/studentResumeEndpoints";
import successMessages from "@/constants/feedbackMessages/resume/successMessages";
import errorMessages from "@/constants/feedbackMessages/resume/errorMessages";
import { revalidatePath } from "next/cache";

export async function addEducation(payload) {
    try {
        const res = await httpRequest(studentResumeEndpoints.addEducation, "POST", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.educationAdded;
    } catch (error) {
        throw new Error(error.message || errorMessages.educationAdded);
    }
}

export async function updateEducaiton(payload, id) {
    try {
        const res = await httpRequest(`${studentResumeEndpoints.updateEducation}${id}/`, "PUT", payload, true, true);
        revalidatePath('student-dashboard/my-resume', 'page');
        return res.detail || successMessages.educationUpdated;
    } catch (error) {
        throw new Error(error.message || errorMessages.educationUpdated);
    }
}

export async function deleteEducaiton(id) {
    try {
        await httpRequest(`${studentResumeEndpoints.deleteEducation}${id}/`, "DELETE", null, true, false);
        revalidatePath('student-dashboard/my-resume', 'page');
        return successMessages.educationDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.educationDeleted);
    }
}