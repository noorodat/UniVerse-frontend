import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { cookies } from "next/headers";
import { getRefreshToken } from "@/utils/getRefreshToken";

export async function POST() {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
        return new Response(JSON.stringify({ error: "Refresh token is missing" }), { status: 401 });
    }

    const payload = {
        refresh_token: refreshToken,
    };

    try {
        const response = await fetch(authEndpoints.updateUserSession, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Failed to update session: ${response.status}`);
        }

        const data = await response.json();

        cookies().set({
            name: "access_token",
            value: data.token,
            httpOnly: true,
            sameSite: "strict",
            path: "/",
        });
        cookies().set({
            name: "refresh_token",
            value: data.refresh_token,
            httpOnly: true,
            sameSite: "strict",
            path: "/",
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error updating session:", error);
        return new Response(JSON.stringify({ error: "Failed to update session" }), { status: 500 });
    }
}
