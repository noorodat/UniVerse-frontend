'use server'
import { NextResponse } from "next/server";
import checkUserStatus from "./utils/middleware-functions/checkUserStatus";
import checkTokensExistance from "./utils/middleware-functions/checkTokensExistance";


export async function middleware(request) {
    const res = await checkTokensExistance(request);
    return res || NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|register|verify_email|verification_successful|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
