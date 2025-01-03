"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import { redirect } from "next/navigation";
import removeCookie from "@/utils/removeCookie";
import { getUserToken } from "@/utils/getUserToken";

export default async function logout() {
    try {
        const refreshToken = await getUserToken('refresh_token');
        const payload = {
            refresh_token: refreshToken
        }
        await httpRequest(authEndpoints.logout, "POST", payload, true, false);
        await removeCookie('access_token');
        await removeCookie('refresh_token');
        await removeCookie('user_id');
    } catch (error) {
        throw new Error(error.message || errorMessages.logoutError);
    }
    return redirect('/login');
}