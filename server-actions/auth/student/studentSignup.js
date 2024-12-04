"use server"
import httpRequest from "@/utils/httpRequest";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";

export default async function studentSignup(firstName, lastName, email, password) {
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
    };

    try {
        const response = await httpRequest(studentEndPoints.studentSignup, "POST", formData, false, true);
        return response;
    } catch (error) {
        throw new Error(error || errorMessages.loginError);
    }
}
