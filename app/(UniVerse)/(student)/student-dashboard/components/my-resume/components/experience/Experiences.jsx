"use client"

import ResumeSectionModal from "../ResumeSectionModal";
import { addExperience, updateExperience, deleteExperience } from "@/server-actions/resume/experience/actions";
import { formatResumeDate } from "@/utils/format/formatResumeDate";
import { toast } from "react-toastify";
const EXP_INDEX = "ADDEXP"

const Experiences = ({ experiences }) => {

  const handleAddExperience = async (data) => {
    console.log(data);
    try {
      const res = await addExperience(data);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleUpdateExperience = async (data, id) => {
    try {
      const res = await updateExperience(data, id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }
  const handleDeleteExperience = async (id) => {
    try {
      const res = await deleteExperience(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Work & Experience</h4>
        <ResumeSectionModal
          sectionType={`experience`}
          operation={`add`}
          onSubmit={handleAddExperience}
          index={EXP_INDEX}
        />
        <button className="add-info-btn" data-bs-toggle="modal"
          data-bs-target={`#add-${EXP_INDEX}experience-${EXP_INDEX}Modal`}
        >
          <span className="icon flaticon-plus"></span> Add Experience
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      {experiences?.map((experience, index) => (
        <div className="resume-block" key={index}>
          <ResumeSectionModal
            sectionType={`experience`}
            operation={`edit`}
            onSubmit={handleUpdateExperience}
            index={index}
            data={experience}
          />
          <ResumeSectionModal
            sectionType={`experience`}
            operation={`delete`}
            onSubmit={handleDeleteExperience}
            index={index}
            data={experience}
          />
          <div className="inner">
            <span className="name">{experience.company.charAt(0).toUpperCase()}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{experience.position}</h3>
                <span>{experience.company}</span>
              </div>
              <div className="edit-box">
              <span className="year">{formatResumeDate(experience.start_date)} - {formatResumeDate(experience.end_date)}</span>
                <div className="edit-btns">
                  <button>
                    <a
                      href="#"
                      className="theme-btn call-modal"
                      data-bs-toggle="modal"
                      data-bs-target={`#edit-${index}experience-${index}Modal`}
                    >
                      <span className="la la-pencil"></span>
                    </a>
                  </button>
                  <button>
                    <a
                      href="#"
                      className="theme-btn call-modal"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-${index}experience-${index}Modal`}
                    >
                      <span className="la la-trash"></span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              ipsum tellus. Interdum et malesuada fames ac ante
              <br /> ipsum primis in faucibus.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
