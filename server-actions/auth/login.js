"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import { redirect } from "next/navigation";
import saveUserToken from "./saveUserToken";

export default async function login(email, password) {
    let isVerified = true;
    let userType = null;
    const formData = {
        email,
        password,
    };
    try {
        const response = await httpRequest(authEndpoints.login, "POST", formData, false, true);
        console.log("Login response Login response Login response Login response Login response Login response")
        console.log(response)
        console.log("Login response Login response Login response Login response Login response Login response")
        if (!response.user.data.is_verified) {
            isVerified = false;
            userType = response.user_type;
        } else {
            await saveUserToken("access_token", response.token);
            await saveUserToken("refresh_token", response.refresh_token);
        }
    } catch (error) {
        throw new Error(error || errorMessages.loginError);
    }
    !isVerified ? redirect(`verify_email?email=${email}&user_type=${userType}`) : redirect('/');
}
