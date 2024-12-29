import { z } from "zod";

export default z
    .object({
        oldPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
            .regex(/[\W_]/, "Password must contain at least one special character"),
        newPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
            .regex(/[\W_]/, "Password must contain at least one special character"),
        confirmPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
            .regex(/[\W_]/, "Password must contain at least one special character"),
    })
    .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
            message: "Passwords must match",
            path: ["confirmPassword"], // Error shown on confirmPassword
        }
    )
    .refine(
        (data) => data.oldPassword !== data.newPassword,
        {
            message: "New password cannot be the same as the old password",
            path: ["newPassword"], // Error shown on newPassword
        }
    );
