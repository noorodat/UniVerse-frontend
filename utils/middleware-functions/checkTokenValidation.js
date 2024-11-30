import { getData } from "../getData";
import logout from "@/server-actions/auth/logout";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { NextResponse } from "next/server";

export default async function checkTokenValidation() {
    try {
        const response = await getData(authEndpoints.checkTokenValidation);
        if (!response.data) {
            return await logout();
        }
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}