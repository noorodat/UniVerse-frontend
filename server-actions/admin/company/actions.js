"use server"

import httpRequest from "@/utils/httpRequest";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";
import { buildEndpoint } from "@/utils/buildEndpoint";
import { revalidatePath } from "next/cache";

export async function acceptCompany(id) {
    try {
        const res = await httpRequest(buildEndpoint(companyEndPoints.acceptCompany, { id }), "POST", { id }, true, true);
        revalidatePath('/admin/dashboard/pending-company-requests', 'page');
        return res.detail || "Company successfully accepted";
    } catch (error) {
        throw new Error(error.message || "Error while accepting company");
    }
}

export async function rejectCompany(id) {
    try {
        await httpRequest(buildEndpoint(companyEndPoints.rejectCompany, { id }), "POST", null, true, true);
        revalidatePath('/admin/dashboard/pending-company-requests', 'page');
        return "Company rejected";
    } catch (error) {
        throw new Error(error.message || "Error while rejecting company");
    }
}