import { z } from "zod";

export default z.object({
    name: z.string().min(1, "Company name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    phone: z.string().nullable(),
    industry: z.string().nullable(),
    website_url: z.string().nullable(),
    country: z.string().nullable(),
    city: z.string().nullable(),
    about: z.string().max(700, "Maximum 700 characters are allowed").nullable(),
});
