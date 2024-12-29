"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { redirect } from "next/navigation";

export default async function updateEmail(emailData, userType) {
    const payload = {
        email: emailData.newEmail,
    }
    try {
        await httpRequest(authEndpoints.updateEmail, "PUT", payload, true, true);
    } catch (error) {
        throw new Error(error.message || "Signup failed");
    }
    redirect(`verify_email?email=${emailData.newEmail}&user_type=${userType}`)
}
