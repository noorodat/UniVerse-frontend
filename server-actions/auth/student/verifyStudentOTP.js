"use server"
import httpRequest from "@/utils/httpRequest";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import { redirect } from "next/navigation";

export default async function verifyStudentOTP(email, otp) {
    const formData = {
        email,
        otp,
    };
    try {
        await httpRequest(studentEndPoints.verifyStudent, "POST", formData, false, true);
    } catch (error) {
        throw new Error(error.message || "Verification failed");
    }
    redirect('/verification_successful')
}
