"use server"
import httpRequest from "@/utils/httpRequest";
import adminEndPoints from "@/constants/endpoints/admin/adminEndPoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";
import saveCookie from "@/utils/saveCookie";
import removeCookie from "@/utils/removeCookie";
import { redirect } from "next/navigation";
import { getCookie } from "@/utils/getCookie";

export async function login(email, password) {
    const formData = {
        email,
        password,
    };
    try {
        const response = await httpRequest(adminEndPoints.login, "POST", formData, false, true);
        console.log("Login response Login response Login response Login response Login response Login response")
        console.log(response)
        console.log("Login response Login response Login response Login response Login response Login response")
        await saveCookie("access_token", response.access_token);
        await saveCookie("refresh_token", response.refresh_token);
        await saveCookie("user_id", response.admin.id);
    } catch (error) {
        throw new Error(error || errorMessages.loginError);
    }
    redirect('/admin/dashboard');
}

export async function logout() {
    const refresh = await getCookie('refresh_token');
    try {
        await httpRequest(adminEndPoints.logout, "POST", { refresh }, true);
        await removeCookie("access_token");
        await removeCookie("refresh_token");
        await removeCookie("user_id");
    } catch (error) {
        throw new Error(error || errorMessages.loginError);
    }
    redirect('/admin/login');
}
