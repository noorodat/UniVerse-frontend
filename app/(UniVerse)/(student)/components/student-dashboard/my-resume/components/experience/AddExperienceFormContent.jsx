const AddExperienceFormContent = () => {
    return (
        <div className="form-inner">
            <h3>Add Experience</h3>

            {/* <!--Login Form--> */}
            <form method="post">
                <div className="form-group">
                    <label>Position</label>
                    <input type="text" name="username" placeholder="" required />
                </div>

                <div className="form-group">
                    <label>Company</label>
                    <input type="text" name="username" placeholder="" required />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Description</label>
                    <textarea className="overflow-scroll" placeholder=""></textarea>
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
                        Save
                    </button>
                </div>
                {/* login */}
            </form>
            {/* End form */}
            {/* End bottom-box LoginWithSocial */}
        </div>
    );
};

export default AddExperienceFormContent;
