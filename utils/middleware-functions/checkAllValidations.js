import checkTokensExistance from "./checkTokensExistance";
import checkUserStatus from "./checkUserStatus";
import refreshUserSession from "./refreshUserSession";

export default async function checkAllValidations(request) {
    // Array of middleware functions to check
    const middlewareChecks = [refreshUserSession, checkTokensExistance, checkUserStatus];

    for (const check of middlewareChecks) {
        const result = await check(request);
        if (result) {
            return result;
        }
    }
    return null;
}
