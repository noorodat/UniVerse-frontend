import { z } from "zod";

export default z.object({
    name: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[a-zA-Z]/, "Password must contain at least one alphabet")
        .regex(/[\W_]/, "Password must contain at least one special character"),
    proof_document: z
        .custom((file) => {
            if (!file) {
                return false; // File is required
            }
            if (file.size > 8 * 1024 * 1024) {
                return false; // File size exceeds 8 MB
            }
            return true;
        }, "File is required and must not exceed 8 MB"),
});
