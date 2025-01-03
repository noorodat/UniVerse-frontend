"use client";

import ResumeSectionModal from "../ResumeSectionModal";
import { addAward, updateAward, deleteAward } from "@/server-actions/resume/award/actions";
import { formatResumeDate } from "@/utils/format/formatResumeDate";
import { toast } from "react-toastify";

const AWARD_INDEX = "ADDAWARD";

const Awards = ({ awards, editable = true }) => {
  const handleAddAward = async (data) => {
    try {
      const res = await addAward(data);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdateAward = async (data, id) => {
    try {
      const res = await updateAward(data, id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteAward = async (id) => {
    try {
      const res = await deleteAward(id);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="resume-outer theme-yellow">
      <div className="upper-title">
        <h4>Awards</h4>
        {editable && (
          <>
            <ResumeSectionModal
              sectionType={`award`}
              operation={`add`}
              onSubmit={handleAddAward}
              index={AWARD_INDEX}
            />
            <button
              className="add-info-btn"
              data-bs-toggle="modal"
              data-bs-target={`#add-${AWARD_INDEX}award-${AWARD_INDEX}Modal`}
            >
              <span className="icon flaticon-plus"></span> Add Award
            </button>
          </>
        )}
      </div>

      {awards?.map((award, index) => (
        <div className="resume-block" key={index}>
          {editable && (
            <>
              <ResumeSectionModal
                sectionType={`award`}
                operation={`edit`}
                onSubmit={handleUpdateAward}
                index={index}
                data={award}
              />
              <ResumeSectionModal
                sectionType={`award`}
                operation={`delete`}
                onSubmit={handleDeleteAward}
                index={index}
                data={award}
              />
            </>
          )}
          <div className="inner">
            <span className="name">{award.title.charAt(0).toUpperCase()}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{award.title}</h3>
                <span></span>
              </div>
              <div className="edit-box">
                <span className="year">{formatResumeDate(award.start_date)}</span>
                {editable && (
                  <div className="edit-btns">
                    <button>
                      <a
                        href="#"
                        className="theme-btn call-modal"
                        data-bs-toggle="modal"
                        data-bs-target={`#edit-${index}award-${index}Modal`}
                      >
                        <span className="la la-pencil"></span>
                      </a>
                    </button>
                    <button>
                      <a
                        href="#"
                        className="theme-btn call-modal"
                        data-bs-toggle="modal"
                        data-bs-target={`#delete-${index}award-${index}Modal`}
                      >
                        <span className="la la-trash"></span>
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="text">{award.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Awards;
