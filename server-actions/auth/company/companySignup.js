"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";

export default async function companySignup(name, email, password) {
    const formData = {
        name,
        email,
        password,
    };

    try {
        const response = await httpRequest(authEndpoints.companySignup, "POST", formData, false, true);
        return response;
    } catch (error) {
        throw new Error(error.message || "Signup failed");
    }
}
