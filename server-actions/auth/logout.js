"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import { redirect } from "next/navigation";
import removeUserTokens from "./removeUserTokens";

export default async function logout() {
    try {
        await httpRequest(authEndpoints.logout, "POST", null, true, false);
        removeUserTokens('access_token');
        removeUserTokens('refresh_token');
    } catch (error) {
        throw new Error(error || errorMessages.logoutError);
    }
    return redirect('/login');
}