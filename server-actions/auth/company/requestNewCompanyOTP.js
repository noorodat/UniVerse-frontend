"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import successMessages from "@/constants/feedbackMessages/auth/successMessages";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";

export default async function requestNewCompanyOTP(email) {
    const payload = {
        email,
    };

    try {
        await httpRequest(authEndpoints.requestNewCompanyOTP, "POST", payload, false, true);
        return successMessages.requestNewOTP;
    } catch (error) {
        throw new Error(errorMessages.requestNewOTP);
    }
}
