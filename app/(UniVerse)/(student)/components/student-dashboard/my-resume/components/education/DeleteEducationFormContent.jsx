const DeleteEducationFormContent = () => {
    return (
        <div className="form-inner">
            <h3>Delete Education</h3>
            <h6 className="text-center text-red pb-2">Note: you won't be able to undo this operation.</h6>

            {/* <!--Login Form--> */}
            <form method="post">
                <div className="form-group">
                    <label>Field of study</label>
                    <input disabled type="text" name="username" placeholder="" required />
                </div>

                <div className="form-group">
                    <label>University</label>
                    <input disabled type="text" name="username" placeholder="" required />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Description</label>
                    <textarea disabled className="overflow-scroll" placeholder=""></textarea>
                </div>

                <div className="form-group d-flex justify-content-between gap-2">
                    <div className="d-flex flex-column w-50">
                        <label className="fw-bold">From</label>
                        <input type="date" name="" placeholder="" required />
                    </div>
                    <div className="d-flex flex-column w-50">
                        <label className="fw-bold">To</label>
                        <input type="date" name="" placeholder="" required />
                    </div>
                </div>

                {/* password */}

                {/* forgot password */}

                <div className="form-group">
                    <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="log-in"
                    >
                        Delete
                    </button>
                </div>
            </form>
            {/* End form */}
            {/* End bottom-box LoginWithSocial */}
        </div>
    );
};

export default DeleteEducationFormContent;
