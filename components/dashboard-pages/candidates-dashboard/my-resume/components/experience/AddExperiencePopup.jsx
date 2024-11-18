import AddExperienceFormContent from "./AddExperienceFormContent";
const AddExperiencePopup = () => {
    return (
        <>
            <div className="modal fade" id={`AddExperienceModal`}>
                <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="closed-modal"
                            data-bs-dismiss="modal"
                        ></button>
                        {/* End close modal btn */}

                        <div className="modal-body">
                            {/* <!-- Login modal --> */}
                            <div id="login-modal">
                                {/* <!-- Login Form --> */}
                                <div className="login-form default-form">
                                    <AddExperienceFormContent />
                                </div>
                                {/* <!--End Login Form --> */}
                            </div>
                            {/* <!-- End Login Module --> */}
                        </div>
                        {/* En modal-body */}
                    </div>
                    {/* End modal-content */}
                </div>
            </div>
            {/* <!-- Login Popup Modal --> */}
        </>
    );
};

export default AddExperiencePopup;
