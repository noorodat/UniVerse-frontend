'use server'
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";
import httpRequest from "@/utils/httpRequest";
export default async function updateImage(image) {
    const payload = {
        image
    }
    try {
        const res = await httpRequest(profileEndPoints.updateImage, "PUT", payload, true, false);
        return res.message;
    } catch (error) {
        throw new Error(error.detail);
    }
}