"use server"
import httpRequest from "@/utils/httpRequest";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";

export default async function updatePassword(passwordData) {
    const payload = {
        old_password: passwordData.oldPassword,
        new_password: passwordData.newPassword,
        confirm_password: passwordData.confirmPassword
    }
    try {
        const res = await httpRequest(authEndpoints.updatePassword, "PUT", payload, true, true);
        return res.detail || "Password updated successfully";
    } catch (error) {
        throw new Error(error.message || "Error updating password");
    }
}
