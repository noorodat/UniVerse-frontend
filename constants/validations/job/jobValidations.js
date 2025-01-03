import { z } from "zod";

export default z.object({
    title: z.string().min(1, "Job title is required"),
    description: z.string().min(1, "Description is required"),
    type: z.string().nullable(),
    salary_range: z.string().nullable(),
    tags: z
        .array(z.string())
        .min(1, "At least one tag is required"),
    department_id: z.string("Department is required"),
    requirements: z
        .array(z.string())
        .min(1, "At least one requirement is required"),
});
