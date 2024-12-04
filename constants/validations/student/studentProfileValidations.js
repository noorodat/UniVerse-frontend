import { z } from "zod";

export default z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    university: z.string().optional(),
    department: z.string().optional(),
    portfolio: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
});
