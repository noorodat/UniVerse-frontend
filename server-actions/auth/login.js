"use server";

import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import { redirect } from "next/navigation";
import saveCookie from "@/utils/saveCookie";

export default async function login(email, password) {
    const formData = { email, password };

    let response;
    let isVerified = true;
    let isAccepted = true;
    let userType = null;

    try {
        response = await httpRequest(authEndpoints.login, "POST", formData, false, true);
        console.log("Login response:", response);

        if (!response.is_accepted) {
            isAccepted = false;
        }
        if (!response.is_verified) {
            isVerified = false;
            userType = response.user_type;
        }

        // Save cookies only if both conditions are met
        if (isVerified && isAccepted) {
            await saveCookie("access_token", response.access_token);
            await saveCookie("refresh_token", response.refresh_token);
            await saveCookie("user_id", response.user.id);
        }
    } catch (error) {
        throw new Error(error || errorMessages.loginError);
    }

    // Redirect based on verification and acceptance status
    if (!isVerified) {
        redirect(`verify_email?email=${email}&user_type=${userType}`);
    }

    if (!isAccepted) {
        redirect(`/pending-request`);
    }

    redirect('/');
}
