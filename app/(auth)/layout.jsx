import { getUserToken } from "@/utils/getUserToken";
import { redirect } from "next/navigation";
import { getData } from "@/utils/getData";
import profileEndPoints from "@/constants/endpoints/profile/profileEndPoints";

export default async function AuthLayout({ children }) {
    const token = await getUserToken();
    if (token) {
        try {
            const response = await getData(profileEndPoints.getUser, true, 0);
            if (response.data.is_logged_in) {
                redirect('/')
            }
        } catch { } {
            
        }
    }
    return (
        <>
            {children}
        </>
    );
}