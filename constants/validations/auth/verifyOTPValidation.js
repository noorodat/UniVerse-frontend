import { z } from "zod";

export default z.object({
    OTP: z.string()
        .length(6, "OTP must be exactly 6 digits")
});
