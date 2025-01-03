"use server"

import { getUserToken } from "./getUserToken";

async function httpRequest(endpoint, method, payload = null, withToken = false, returnResponseData = false) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;
    console.log(`${baseURL}/${endpoint}`);
    const token = withToken ? await getUserToken() : null;

    if (!['POST', 'DELETE', 'PUT', 'PATCH'].includes(method)) {
        throw new Error("Invalid HTTP method");
    }

    try {
        const headers = {
            "Content-Type": "application/json",
            ...(withToken && { Authorization: `Bearer ${token}` }),
        };

        const options = {
            method,
            headers: {
                ...(withToken && { Authorization: `Bearer ${token}` }),
                ...(payload instanceof FormData ? {} : { "Content-Type": "application/json" }),
            },
            body: payload instanceof FormData ? payload : JSON.stringify(payload),
        };

        console.log("payloadpayloadpayloadpayloadpayloadpayloadpayloadpayload")
        console.log(payload)
        console.log("payloadpayloadpayloadpayloadpayloadpayloadpayloadpayload")

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
