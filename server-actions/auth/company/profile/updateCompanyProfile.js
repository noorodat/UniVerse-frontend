"use server"
import httpRequest from "@/utils/httpRequest";
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import successMessages from "@/constants/feedbackMessages/profile/successMessages";
import errorMessages from "@/constants/feedbackMessages/profile/errorMessages";
import { revalidatePath } from "next/cache";

export default async function updateCompanyProfile(payload) {
    try {
        await httpRequest(profileEndPoints.updateCompanyProfile, "PUT", payload, true, false);
        revalidatePath('company-dashboard/company-profile', 'layout');
        return successMessages.profileUpdate;
    } catch (error) {
        throw new Error(error || errorMessages.profileUpdate);
    }
}
