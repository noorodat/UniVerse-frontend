import { getUserToken } from "./getUserToken";
import { redirect } from "next/navigation";

export async function getData(endpoint, withToken = true, revalidateValue = false, cacheValue = "default",) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;

    let data = null;
    let error = null;
    let headers = {};

    try {
        if (withToken) {
            const token = await getUserToken();
            console.log(token)
            if (!token) return redirect('/login')
            headers = {
                'Authorization': `Bearer ${token}`,
            };
        }

        const res = await fetch(`${baseURL}/${endpoint}`, {
            headers: headers,
            next: {
                revalidate: revalidateValue
            },
            cache: `${cacheValue}`
        });

        console.log(res)

        if (!res.ok) {
            let errorMessage = "Failed to fetch data";
            try {
                const errorData = await res.json();
                errorMessage = errorData.detail || errorMessage;
            } catch { }
            throw new Error(errorMessage);
        }

        data = await res.json();
    } catch (err) {
        error = err.message || "Failed to fetch data";
    }

    return { data, error };
}
