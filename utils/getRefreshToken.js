'use server';
import { cookies } from 'next/headers';

export async function getRefreshToken() {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get('refresh_token')?.value;
    return refreshToken;
}