"use server";

import { NextResponse } from "next/server";
import { getData } from "./utils/getData";
import authEndpoints from "./constants/endpoints/auth/authEndpoints";
import refreshUserSession from "./utils/middleware-functions/refreshUserSession";

const studentRoutes = ["student-dashboard"];

export async function middleware(request) {
    const url = request.nextUrl.pathname;

    const res = await refreshUserSession(request);

    if (studentRoutes.some(route => url.startsWith(`/${route}`))) {
        const response = await getData(authEndpoints.checkVerification);
        const userType = response?.data?.user_type;
        if (userType != "student") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }


    return res || NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|register|verify_email|verification_successful|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};