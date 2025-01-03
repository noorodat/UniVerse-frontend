"use server"

import httpRequest from "@/utils/httpRequest";
import jobEndPoints from "@/constants/endpoints/job/jobEndPoints";
import successMessages from "@/constants/feedbackMessages/job/successMessages";
import errorMessages from "@/constants/feedbackMessages/job/errorMessages";
import { buildEndpoint } from "@/utils/buildEndpoint";
import { revalidatePath } from "next/cache";

export async function postJob(payload) {
    try {
        const res = await httpRequest(jobEndPoints.jobPosts, "POST", payload, true, true);
        revalidatePath('company-dashboard/post-jobs', 'page');
        return res.detail || successMessages.jobCreated;
    } catch (error) {
        throw new Error(error.message || errorMessages.jobCreated);
    }
}

export async function updateJob(payload, id) {
    try {
        const res = await httpRequest(buildEndpoint(jobEndPoints.singleJob, { id }), "PUT", payload, true, true);
        revalidatePath(`/job-single/${id}`);
        return res.detail || successMessages.jobUpdated;
    } catch (error) {
        throw new Error(error.message || errorMessages.jobUpdated);
    }
}

export async function deleteJob(id) {
    try {
        await httpRequest(buildEndpoint(jobEndPoints.singleJob, { id }), "DELETE", null, true, false);
        revalidatePath(`/company-dashboard/manage-jobs`);
        return successMessages.jobDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.jobDeleted);
    }
}

export async function applyForJob(payload, id) {
    try {
        const res = await httpRequest(jobEndPoints.applicaitons, "POST", payload, true, true);
        revalidatePath('/student-dashboard/applied-jobs', 'page');
        return res.detail || successMessages.jobApplied;
    } catch (error) {
        throw new Error(error.message || errorMessages.jobApplied);
    }
}

export async function approveApplication(payload, id) {
    try {
        const res = await httpRequest(buildEndpoint(jobEndPoints.approveApplication, { id }), "PATCH", payload, true, true);
        revalidatePath('/company-dashboard/manage-jobs', 'page');
        return res.detail || successMessages.applicationApproved;
    } catch (error) {
        throw new Error(error.message || errorMessages.applicationApproved);
    }
}

export async function rejectApplication(payload, id) {
    try {
        const res = await httpRequest(buildEndpoint(jobEndPoints.rejectApplication, { id }), "PATCH", payload, true, true);
        revalidatePath('/company-dashboard/manage-jobs', 'page');
        return res.detail || successMessages.applicationRejected;
    } catch (error) {
        throw new Error(error.message || errorMessages.applicationRejected);
    }
}

export async function deleteApplication(id) {
    try {
        const res = await httpRequest(buildEndpoint(jobEndPoints.deleteApplicaiton, { id }), "DELETE", null, true, false);
        revalidatePath('/company-dashboard/manage-jobs', 'page');
        return successMessages.applicationDeleted;
    } catch (error) {
        throw new Error(error.message || errorMessages.applicationDeleted);
    }
}