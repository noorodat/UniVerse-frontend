import { getData } from "../get-data/getData";
import logout from "@/server-actions/auth/logout";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { NextResponse } from "next/server";

export default async function (request) {
    console.log("checkUserStatus");
    try {
        const response = await getData(authEndpoints.checkVerification);

        if (!response.data) {
            return await logout();
        }
        const email = response.data.email;
        const userType = response.data.user_type;
        const isVerified = response.data.is_verified;
        const isLoggedIn = response.data.is_logged_in;
        if (!isVerified) {
            return NextResponse.redirect(
                new URL(`/verify_email?email=${email}&user_type=${userType}`, request.url)
            );
        }
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
};