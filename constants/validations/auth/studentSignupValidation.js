import { z } from "zod";

export default z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().regex(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.just\.edu\.jo$/,
        "Invalid email address. It must be a student email"
    ),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
        .regex(/[\W_]/, "Password must contain at least one special character"),
});
