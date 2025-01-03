import { cookies } from "next/headers";

export default async function removeCookie(tokenKey) {
    'use server'
    if (cookies().get(tokenKey).value)
        cookies().delete(tokenKey)
}