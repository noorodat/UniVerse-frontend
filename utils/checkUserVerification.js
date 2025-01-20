"use server"
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import { getData } from "./get-data/getData";

export default async function checkUserVerification() {
    try {
        const response = await getData(authEndpoints.checkVerification, true, 0, 'no-cache');
        console.log("##############################################")
        console.log(response)
        console.log("##############################################")
        return response.data.is_verified;
    } catch (error) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(error.message)
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        throw new Error(error);
    }
}