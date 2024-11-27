'use server';
import { cookies } from 'next/headers';

export async function getUserToken() {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    return accessToken;
}