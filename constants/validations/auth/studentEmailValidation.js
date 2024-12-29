import { z } from "zod";

export default z
    .object({
        oldEmail: z
            .string()
            .regex(
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.just\.edu\.jo$/,
                "Invalid email address. It must be a student email"
            ),
        newEmail: z
            .string()
            .regex(
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.just\.edu\.jo$/,
                "Invalid email address. It must be a student email"
            ),
        confirmEmail: z
            .string()
            .regex(
                /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.just\.edu\.jo$/,
                "Invalid email address. It must be a student email"
            ),
    })
    .refine(
        (data) => data.newEmail === data.confirmEmail,
        {
            message: "Email addresses must match",
            path: ["confirmEmail"], // Error shown on confirmEmail
        }
    )
    .refine(
        (data) => data.newEmail !== data.oldEmail,
        {
            message: "New email cannot be the same as the old email",
            path: ["newEmail"], // Error shown on newEmail
        }
    )
    .refine(
        (data) => data.confirmEmail !== data.oldEmail,
        {
            message: "Confirm email cannot be the same as the old email",
            path: ["confirmEmail"], // Error shown on confirmEmail
        }
    );
