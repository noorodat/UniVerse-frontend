import { getUserToken } from "./getUserToken";

async function httpRequest(endpoint, method, payload = null, withToken = false, returnResponseData = false) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;

    const token = withToken ? await getUserToken() : null;
    console.log("tokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentoken")
    console.log(token)
    console.log("tokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentokentoken")

    if (!['POST', 'DELETE', 'PUT', 'PATCH', "GET"].includes(method)) {
        throw new Error("Invalid HTTP method");
    }

    try {
        const headers = {
            "Content-Type": "application/json",
            ...(withToken && { Authorization: `Token ${token}` }),
        };

        const options = {
            method,
            headers,
            ...(payload && { body: JSON.stringify(payload) }),
        };

        const res = await fetch(`${baseURL}/${endpoint}`, options);

        if (!res.ok) {
            let errorMessage = "Failed to complete request";
            try {
                const errorData = await res.json();
                errorMessage = errorData.detail || errorMessage;
            } catch { }
            throw new Error(errorMessage);
        }

        return returnResponseData ? await res.json() : null;
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}

export default httpRequest;
