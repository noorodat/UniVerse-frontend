'use server';
import { cookies } from 'next/headers';

export async function getCookie(key) {
    const cookieStore = cookies();
    const cookie = cookieStore.get(key)?.value;
    return cookie;
}