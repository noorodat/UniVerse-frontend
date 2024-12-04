"use server";
import { getRefreshToken } from "../getRefreshToken";
import { getUserToken } from "../getUserToken";
import httpRequest from "../httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { NextResponse } from "next/server";
import saveUserTokenViaCookies from "./saveUserTokenViaCookies";

export default async function checkTokensExistance(request) {
    const access_token = await getUserToken();
    const refresh_token = await getRefreshToken();

    const response = NextResponse.next();

    if (!access_token && refresh_token) {
        try {
            const tokenResponse = await httpRequest(authEndpoints.refreshAccessToken, "POST", { refresh_token }, false, true);

            // Update the response object with cookies
            await saveUserTokenViaCookies(response, "access_token", tokenResponse.access_token);
            await saveUserTokenViaCookies(response, "refresh_token", tokenResponse.refresh_token);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    if (!refresh_token && !access_token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return response;
}
