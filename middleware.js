import { NextResponse } from "next/server";
import { getUserToken } from "./utils/getUserToken";
import { getRefreshToken } from "./utils/getRefreshToken";
import profileEndPoints from "./constants/endpoints/profile/profileEndPoints";
import { getData } from "./utils/getData";
import logout from "./server-actions/auth/logout";

const checkUserStatus = async (request) => {
    const token = await getUserToken();
    const refresh_token = await getRefreshToken();
    if (!token || !refresh_token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    try {
        const response = await getData(profileEndPoints.getUser, true);
        if (!response.data) {
            return await logout();
        }
        const email = response.data.user.email;
        const userType = response.data.user_type;
        if (!response.data.user.data.is_verified) {
            return NextResponse.redirect(
                new URL(`/verify_email?email=${email}&user_type=${userType}`, request.url)
            );
        }
        if (!response.data.is_logged_in) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
};

export async function middleware(request) {
    const response = await checkUserStatus(request);
    return response || NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|register|verify_email|verification_successful|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
