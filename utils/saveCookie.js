'use server'

import { cookies } from "next/headers";

export default async function saveCookie(key, value) {
    cookies().set(key, value, {
        httpOnly: true,
        path: "/",
        httpOnly: true,
        sameSite: 'strict',
    });
}