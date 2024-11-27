"use server"
import { cookies } from "next/headers";

export default async function removeUserTokens(tokenKey) {
    if (cookies().get(tokenKey).value)
        cookies().delete(tokenKey)
}