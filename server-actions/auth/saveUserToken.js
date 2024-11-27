import { cookies } from "next/headers";

export default async function saveUserToken(tokenKey, token) {
    'use server'
    cookies().set({
        name: tokenKey,
        value: token,
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
    })
}