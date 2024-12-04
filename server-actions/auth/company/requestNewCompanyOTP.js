"use server"
import httpRequest from "@/utils/httpRequest";
import successMessages from "@/constants/feedbackMessages/auth/successMessages";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";


export default async function requestNewCompanyOTP(email) {
    const payload = {
        email,
    };

    try {
        await httpRequest(companyEndPoints.requestNewCompanyOTP, "POST", payload, false, true);
        return successMessages.requestNewOTP;
    } catch (error) {
        throw new Error(errorMessages.requestNewOTP);
    }
}
