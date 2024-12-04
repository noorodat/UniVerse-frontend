import { z } from "zod";

export default z.object({
    name: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
});
