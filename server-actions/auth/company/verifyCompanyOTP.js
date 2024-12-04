"use server"
import httpRequest from "@/utils/httpRequest";
import { redirect } from "next/navigation";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";


export default async function verifyCompanyOTP(email, otp) {
    const formData = {
        email,
        otp,
    };
    try {
        await httpRequest(companyEndPoints.verifyCompany, "POST", formData, false, true);
    } catch (error) {
        throw new Error(error.message || "Verification failed");
    }
    redirect('/verification_successful')
}
