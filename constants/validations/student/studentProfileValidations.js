import { z } from "zod";

export default z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nullable(),
    portfolio: z.string().nullable(),
    linkedin: z.string().nullable(),
    github: z.string().nullable(),
    department_id: z.string().nullable(),
    university_id: z.string().nullable(),
    // skills: z
    // .array(z.string())
    // .min(1, "At least one tag is required"),
});
