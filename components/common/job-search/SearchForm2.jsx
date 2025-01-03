'use client'

import { useRouter } from "next/navigation";


const SearchForm2 = () => {
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit} className="search-form">
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <label className="title">What</label>
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Job title, keywords, or company"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <label className="title">Department</label>
          <span className="icon flaticon-select"></span>
          <select>
            <option className="">Select a department</option>
            <option className="">IT</option>
            <option className="p-2">Medicine</option>
            <option className="p-2">IDKDKDKD</option>
            <option className="p-2">Auasdasdasdasdstralia</option>
            <option className="p-2">Aussstralia</option>
          </select>
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => router.push("/job-list-v4")}
          >
            <span className="btn-title">Find Jobs</span>
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </form>
  );
};

export default SearchForm2;
