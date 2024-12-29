"use client"

import ResumeSectionModal from "../ResumeSectionModal";
import { addEducation, updateEducaiton, deleteEducaiton } from "@/server-actions/resume/education/actions";
import { toast } from "react-toastify";
import { formatResumeDate } from "@/utils/format/formatResumeDate";

const EDUCAITON_INDEX = "ADDEDU"

const Education = ({ educations }) => {

  const handleAddEducation = async (data) => {
    try {
      const res = await addEducation(data);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleUpdateEducation = async (data, id) => {
    try {
      const res = await updateEducaiton(data, id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }
  const handleDeleteEducation = async (id) => {
    try {
      const res = await deleteEducaiton(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="resume-outer">
      <div className="upper-title">
        <h4>Education</h4>
        <ResumeSectionModal
          sectionType={`education`}
          operation={`add`}
          onSubmit={handleAddEducation}
          index={EDUCAITON_INDEX}
        />
        <button
          className="add-info-btn"
          data-bs-toggle="modal"
          data-bs-target={`#add-${EDUCAITON_INDEX}education-${EDUCAITON_INDEX}Modal`}
        >
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>

      {/* Resume Blocks */}
      {educations?.map((education, index) => (
        <div className="resume-block" key={index}>
          <ResumeSectionModal
            sectionType={`education`}
            operation={`edit`}
            onSubmit={handleUpdateEducation}
            index={index}
            data={education}
          />
          <ResumeSectionModal
            sectionType={`education`}
            operation={`delete`}
            onSubmit={handleDeleteEducation}
            index={index}
            data={education}
          />
          <div className="inner">
            <span className="name">{education.institute.charAt(0).toUpperCase()}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{education.field_of_study}</h3>
                <span>{education.institute}</span>
              </div>
              <div className="edit-box">
                <span className="year">{formatResumeDate(education.start_date)} - {formatResumeDate(education.end_date)}</span>
                <div className="edit-btns">
                  <button>
                    <a
                      href="#"
                      className="theme-btn call-modal"
                      data-bs-toggle="modal"
                      data-bs-target={`#edit-${index}education-${index}Modal`}
                    >
                      <span className="la la-pencil"></span>
                    </a>
                  </button>
                  <button>
                    <a
                      href="#"
                      className="theme-btn call-modal"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-${index}education-${index}Modal`}
                    >
                      <span className="la la-trash"></span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              {education.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
