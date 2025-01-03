"use server"
import httpRequest from "@/utils/httpRequest";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";

export default async function studentSignup(payload) {
    try {
        const response = await httpRequest(studentEndPoints.studentSignup, "POST", payload, false, true);
        return response;
    } catch (error) {
        throw new Error(error || errorMessages.signupError);
    }
}