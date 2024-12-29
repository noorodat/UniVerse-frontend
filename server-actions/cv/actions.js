"use server"

import httpRequest from "@/utils/httpRequest";
import cvEndPoints from "@/constants/endpoints/cv/cvEndPoints";
import getStatusMessage from "@/constants/feedbackMessages/getStatusMessage";
import { revalidatePath } from "next/cache";
import { getUserToken } from "@/utils/getUserToken";

export async function addCVs(formData) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;
    const token = await getUserToken();

    try {
        const res = await fetch(`${baseURL}/api/add_resume/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });


        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.detail || "Failed to upload CVs");
        }

        revalidatePath('/student-dashboard/cv-manager', 'page');
        return await res.json();
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}


export async function deleteCV(id) {
    try {
        await httpRequest(`${cvEndPoints.CVs}${id}/`, "DELETE", null, true, false);
        revalidatePath('/student-dashboard/cv-manager', 'page');
        return getStatusMessage('success', 'CV', 'deleted') || res.detail;
    } catch (error) {
        throw new Error(error.message || getStatusMessage('error', 'CV', 'delete'));
    }
}