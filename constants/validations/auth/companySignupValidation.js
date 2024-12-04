import { z } from "zod";

export default z.object({
    name: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
        .regex(/[\W_]/, "Password must contain at least one special character"),
});