import { getCookie } from "@/utils/getCookie"
import { redirect } from "next/navigation";

export default async function AdminAuthLayout({ children }) {

    const accessToken = await getCookie('access_token');
    const refreshToken = await getCookie('refresh_token');
    const userId = await getCookie('user_id');

    if (accessToken && refreshToken && userId) {
        redirect('/admin/dashboard');
    }


    return (
        <>{children}</>
    )
}
