"use client"
import ResumeSectionModal from "../ResumeSectionModal";

const Education = () => {
  const addEducation = (sectionType, operation, data) => {
    console.log("Add Operation:", sectionType, operation, data);
  };

  const editEducation = (sectionType, operation, data) => {
    console.log("Edit Operation:", sectionType, operation, data);
  };

  const deleteEducation = (sectionType, operation, data) => {
    console.log("Delete Operation:", sectionType, operation);
  };

  return (
    <div className="resume-outer">
      <div className="upper-title">
        <h4>Education</h4>
        <button
          className="add-info-btn"
          data-bs-toggle="modal"
          data-bs-target="#addeducationModal"
        >
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>

      {/* Resume Blocks */}
      <div className="resume-block">
        <ResumeSectionModal
          sectionType="education"
          operation="add"
          onSubmit={addEducation}
        />
        <ResumeSectionModal
          sectionType="education"
          operation="edit"
          onSubmit={editEducation}
        />
        <ResumeSectionModal
          sectionType="education"
          operation="delete"
          onSubmit={deleteEducation}
        />
        <div className="inner">
          <span className="name">M</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Bachelors in Fine Arts</h3>
              <span>Modern College</span>
            </div>
            <div className="edit-box">
              <span className="year">2012 - 2014</span>
              <div className="edit-btns">
                <button>
                  <a
                    href="#"
                    className="theme-btn call-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#editeducationModal"
                  >
                    <span className="la la-pencil"></span>
                  </a>
                </button>
                <button>
                  <a
                    href="#"
                    className="theme-btn call-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteeducationModal"
                  >
                    <span className="la la-trash"></span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin a ipsum tellus. Interdum et malesuada fames ac ante
            <br />
            ipsum primis in faucibus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
