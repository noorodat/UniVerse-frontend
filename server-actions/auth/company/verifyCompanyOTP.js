"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { redirect } from "next/navigation";

export default async function verifyCompanyOTP(email, otp) {
    const formData = {
        email,
        otp,
    };
    try {
        await httpRequest(authEndpoints.verifyCompany, "POST", formData, false, true);
    } catch (error) {
        throw new Error(error.message || "Verification failed");
    }
    redirect('/verification_successful')
}
