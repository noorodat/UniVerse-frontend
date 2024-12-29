import { z } from "zod";

export default z
    .object({
        oldEmail: z.string().email("Invalid email address"),
        newEmail: z.string().email("Invalid email address"),
        confirmEmail: z.string().email("Invalid email address"),
    })
    .refine(
        (data) => data.newEmail === data.confirmEmail,
        {
            message: "New email must match confirm email",
            path: ["confirmEmail"],
        }
    )
    .refine(
        (data) => data.newEmail !== data.oldEmail,
        {
            message: "New email cannot be the same as the old email",
            path: ["newEmail"],
        }
    );
