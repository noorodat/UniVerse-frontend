import { z } from "zod";

export default z.object({
    title: z.string().min(1, "Job title is required"),
    description: z.string().min(1, "Description is required"),
    type: z.string().min(1, "Job type is required"),
    salary_range: z.string().nullable(),
    tags: z
        .array(z.string())
        .min(1, "At least one tag is required"),
    department_id: z.union([z.string(), z.number()]).refine(
        (value) => value !== null && value !== undefined,
        "Department is required"
    ),
    requirements: z
        .array(z.string())
        .min(1, "At least one requirement is required"),
    end_date: z.date().refine(
        (date) => {
            const now = new Date();
            const maxDate = new Date();
            maxDate.setFullYear(now.getFullYear() + 5);
            return date >= now && date <= maxDate;
        },
        {
            message: "End date must be between today and within 5 years.",
        }
    ),
});
