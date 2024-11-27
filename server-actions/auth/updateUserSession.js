'use server'
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import httpRequest from "@/utils/httpRequest";
import { getRefreshToken } from "@/utils/getRefreshToken";
import saveUserToken from "./saveUserToken";
export default async function tsttst() {
    const refreshToken = await getRefreshToken();
    const payload = {
        refresh_token: refreshToken
    }
    const response = await httpRequest(authEndpoints.updateUserSession, "POST", payload, true, true);
    console.log("AKGAKLFGHAKL:GHJAKL:SDHJGAK:LHGAKLHGALGFDHJKL:FGHKLDHGF")
    console.log(response)
    console.log("AKGAKLFGHAKL:GHJAKL:SDHJGAK:LHGAKLHGALGFDHJKL:FGHKLDHGF")
    await saveUserToken('access_token', response.token);
    await saveUserToken('refresh_token', response.refresh_token);
}
