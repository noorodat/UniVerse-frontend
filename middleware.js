"use server";

import { NextResponse } from "next/server";
import { getData } from "./utils/get-data/getData";
import authEndpoints from "./constants/endpoints/auth/authEndpoints";
import refreshUserSession from "./utils/middleware-functions/refreshUserSession";
import { getCookie } from "./utils/getCookie";

const studentRoutes = ["student-dashboard"];
const comapnyRoutes = ["company-dashboard"];
const adminRoutes = ["admin/dashboard"];

export async function middleware(request) {

    const token = await getCookie("access_token");
    const refreshToken = await getCookie("refresh_token");
    const userId = await getCookie("user_id");
    if (!token || !refreshToken || !userId) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const url = request.nextUrl.pathname;

    const res = await refreshUserSession(request);

    if (studentRoutes.some(route => url.startsWith(`/${route}`))) {
        const response = await getData(authEndpoints.checkVerification);
        const userType = response?.data?.user_type;
        console.log(userType);
        if (userType != "student") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (comapnyRoutes.some(route => url.startsWith(`/${route}`))) {
        const response = await getData(authEndpoints.checkVerification);
        const userType = response?.data?.user_type;
        console.log(userType);
        if (userType != "company") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (adminRoutes.some(route => url.startsWith(`/${route}`))) {
        const response = await getData(authEndpoints.checkVerification);
        const userType = response?.data?.user_type;
        console.log(userType);
        if (userType != "admin") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }


    return res || NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|register|verify_email|verification_successful|admin/login|pending-request|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};