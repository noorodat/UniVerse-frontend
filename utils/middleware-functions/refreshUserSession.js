import { getData } from "../getData";
import logout from "@/server-actions/auth/logout";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { NextResponse } from "next/server";
import saveUserTokenViaCookies from "./saveUserTokenViaCookies";
import httpRequest from "../httpRequest";
import { getRefreshToken } from "../getRefreshToken";

export default async function refreshUserSession(request) {
    const refresh_token = await getRefreshToken();
    const response = NextResponse.next();
    try {
        const response = await getData(authEndpoints.checkTokenValidation);
        if (!response.data) {
            return await logout();
        }
    } catch (error) {
        const tokenResponse = await httpRequest(authEndpoints.refreshAccessToken, "POST", { refresh_token }, false, true);
        await saveUserTokenViaCookies(response, "access_token", tokenResponse.access_token);
        await saveUserTokenViaCookies(response, "refresh_token", tokenResponse.refresh_token);
        return response;
    }
    return response;
}