"use server"
import httpRequest from "@/utils/httpRequest";
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import successMessages from "@/constants/feedbackMessages/profile/successMessages";
import errorMessages from "@/constants/feedbackMessages/profile/errorMessages";
import { revalidatePath } from "next/cache";

export default async function updateStudentProfile(payload) {
    try {
        await httpRequest(profileEndPoints.updateStudentProfile, "PUT", payload, true, false);
        revalidatePath('student-dashboard/my-profile', 'page');
        return successMessages.profileUpdate;
    } catch (error) {
        throw new Error(error || errorMessages.profileUpdate);
    }
}
