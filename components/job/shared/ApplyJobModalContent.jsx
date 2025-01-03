"use client";

import { applyForJob } from "@/server-actions/job/actions";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/UserContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useState } from "react";

const DEFAULT_APPLICATION_STATUS = "Pending";

const ApplyJobModalContent = ({ CVs, error, jobId }) => {
  const { id: userId } = useUser();
  const [selectedCV, setSelectedCV] = useState(null);
  const router = useRouter();

  if (error) return <p className="text-center text-red">Something went wrong!</p>;

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    if (!selectedCV) {
      toast.error("You must choose a CV!");
      return;
    }

    try {
      const payload = {
        status: DEFAULT_APPLICATION_STATUS,
        student: userId,
        job_post: jobId,
        resume_id: parseInt(selectedCV),
      };
      const res = await applyForJob(payload);
      toast.success(res);
      router.push("/student-dashboard/applied-jobs");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSelectCV = (cvId) => {
    setSelectedCV(cvId);
  };

  return (
    <form className="default-form job-apply-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="widget-content">
          <h6 className="pt-3 pb-3">Choose a CV</h6>
          <div
            className="files-outer"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}
          >
            {CVs?.map((cv) => (
              <div
                key={cv.id}
                className={`file-edit-box ${selectedCV === cv.id ? "border-success" : ""}`}
                style={{
                  border: selectedCV === cv.id ? "2px solid green" : "1px solid #ccc",
                  padding: "8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectCV(cv.id)}
              >
                <span className="title">{cv.file_name}</span>
                <div className="edit-btns d-flex gap-3">
                  <button>
                    <a
                      className="la la-eye"
                      href={cv.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <CustomFormSubmittionButton
            label={`Apply Job`}
            isLoading={isSubmitting}
            className="theme-btn btn-style-one w-100"
            aria-label="Close"
            data-bs-dismiss="modal"
          />
        </div>
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
