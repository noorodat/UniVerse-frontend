"use client"

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";


export default function ApplyForJobOrEditButton({ companyID = null, status, jobId }) {

  const { userType } = useAuth();
  const { id } = useUser();

  if (id == companyID) {
    return (
      <Link
        href={`/company-dashboard/edit-job/${jobId}`}
        className="theme-btn btn-style-one"
      >
        Edit job
      </Link>
    )
  }

  return (
    <>
      {userType === "student" && status && (
        <a
          href="#"
          className="theme-btn btn-style-one"
          data-bs-toggle="modal"
          data-bs-target="#applyJobModal"
        >
          Apply For Job
        </a>
      )}
    </>
  )
}
