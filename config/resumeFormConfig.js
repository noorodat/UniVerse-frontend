import { z } from "zod";

export const formFieldConfig = {
    education: [
        { name: "field_of_study", label: "Field of Study", type: "text" },
        { name: "institute", label: "Institute", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "start_date", label: "Start Date", type: "date" },
        { name: "end_date", label: "End Date", type: "date" },
    ],
    award: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "start_date", label: "Date Received", type: "date" },
    ],
    experience: [
        { name: "position", label: "Position", type: "text" },
        { name: "company", label: "Company", type: "text" },
        { name: "start_date", label: "Start Date", type: "date" },
        { name: "end_date", label: "End Date", type: "date" },
    ],
};

export const formSchema = {
    education: z.object({
        field_of_study: z.string().min(1, "Field of Study is required"),
        institute: z.string().min(1, "Institute is required"),
        description: z.string().optional(),
        start_date: z.string().min(1, "Start Date is required"),
        end_date: z.string().optional(),
    }),
    award: z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().optional(),
        start_date: z.string().min(1, "Date Received is required"),
    }),
    experience: z.object({
        position: z.string().min(1, "Position is required"),
        company: z.string().min(1, "Company is required"),
        description: z.string().optional(),
        start_date: z.string().min(1, "Start Date is required"),
        end_date: z.string().optional(),
    }),
};
