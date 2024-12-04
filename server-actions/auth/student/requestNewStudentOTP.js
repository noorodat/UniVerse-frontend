"use server"
import httpRequest from "@/utils/httpRequest";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import successMessages from "@/constants/feedbackMessages/auth/successMessages";
import errorMessages from "@/constants/feedbackMessages/auth/errorMessages";

export default async function requestNewStudentOTP(email) {
    const payload = {
        email,
    };

    try {
        await httpRequest(studentEndPoints.requestNewStudentOTP, "POST", payload, false, true);
        return successMessages.requestNewOTP;
    } catch (error) {
        throw new Error(errorMessages.requestNewOTP);
    }
}
