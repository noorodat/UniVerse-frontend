"use server";

import { NextResponse } from "next/server";
import checkAllValidations from "./utils/middleware-functions/checkAllValidations";
import { getData } from "./utils/getData";
import authEndpoints from "./constants/endpoints/auth/authEndpoints";

const studentRoutes = ["student-dashboard"];

export async function middleware(request) {
    const url = request.nextUrl.pathname;

    if (url.startsWith("/")) {
        const res = await checkAllValidations(request);
        if (res) return res;
    }

    // Check if the path starts with one of the studentRoutes
    if (studentRoutes.some(route => url.startsWith(`/${route}`))) {
        const response = await getData(authEndpoints.checkVerification);
        const userType = response?.data?.user_type;
        if (userType != "student") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }


    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|register|verify_email|verification_successful|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
