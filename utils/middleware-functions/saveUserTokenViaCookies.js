"use server";
export default async function saveUserTokenViaCookies(response, tokenKey, tokenValue) {
    response.cookies.set(tokenKey, tokenValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });
}
