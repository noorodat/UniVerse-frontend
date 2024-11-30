'use server'

import { cookies } from "next/headers";

export default async function saveUserToken(tokenKey, tokenValue) {
    cookies().set(tokenKey, tokenValue, {
        httpOnly: true,
        path: "/",
        httpOnly: true,
        sameSite: 'strict',
    });
}