import AddEducationPopup from "./AddEducationPopup";
import DeleteEducationPopup from "./DeleteEducationPopup";
import EditEducationPopup from "./EditEducationPopup";

const Education = () => {
  return (
    <div className="resume-outer">
      <div className="upper-title">
        <AddEducationPopup />
        <h4>Education</h4>
        <button className="add-info-btn" data-bs-toggle="modal"
          data-bs-target="#AddEducationModal">
          <span className="icon flaticon-plus"></span> Add Education
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <EditEducationPopup />
        <DeleteEducationPopup />
        <div className="inner">
          <span className="name">M</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Bachlors in Fine Arts</h3>
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
                    data-bs-target="#EditEducationModal"
                  >
                    <span className="la la-pencil"></span>
                  </a>
                </button>
                <button>
                  <a
                    href="#"
                    className="theme-btn call-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#DeleteEducationModal"
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

      {/* <!-- Resume BLock --> */}
      <div className="resume-block">
        <div className="inner">
          <span className="name">H</span>
          <div className="title-box">
            <div className="info-box">
              <h3>Computer Science</h3>
              <span>Harvard University</span>
            </div>
            <div className="edit-box">
              <span className="year">2008 - 2012</span>
              <div className="edit-btns">
                <button>
                  <a
                    href="#"
                    className="theme-btn call-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#EditEducationModal"
                  >
                    <span className="la la-pencil"></span>
                  </a>
                </button>
                <button>
                  <span className="la la-trash"></span>
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
    </div>
  );
};

export default Education;
