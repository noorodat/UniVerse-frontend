'use server'
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import httpRequest from "@/utils/httpRequest";
import { revalidatePath } from "next/cache";
export default async function updateImage(formData) {
    try {
        const res = await httpRequest(
            "auth/update_image/",
            "PUT",
            formData,
            true,
            true
        );
        revalidatePath('/student-dashboard/my-profile', 'layout');
        return res.message;
    } catch (error) {
        throw new Error(error.detail);
    }
}