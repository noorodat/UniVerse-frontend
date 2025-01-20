"use server"
import httpRequest from "@/utils/httpRequest";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";

export default async function companySignup(formData) {
    console.log("formDataformDataformDataformDataformData")
    console.log(formData)
    console.log("formDataformDataformDataformData")
    try {
        const response = await httpRequest(companyEndPoints.companySignup, "POST", formData, false, true);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.message || "Signup failed");
    }
}