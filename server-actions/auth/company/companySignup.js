"use server"
import httpRequest from "@/utils/httpRequest";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";

export default async function companySignup(name, email, password) {
    const formData = {
        name,
        email,
        password,
    };

    try {
        const response = await httpRequest(companyEndPoints.companySignup, "POST", formData, false, true);
        return response;
    } catch (error) {
        throw new Error(error.message || "Signup failed");
    }
}
