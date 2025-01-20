'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomFormSelect from "@/components/custom/select/CustomFormSelect";
import { useAuth } from "@/contexts/AuthContext";

const SearchForm2 = ({ departments }) => {

  let path;
  let placeHolder;
  let buttonText;

  const { userType } = useAuth();

  if (userType == "student") {
    path = "/job-list";
    placeHolder = "Job title, keywords, or company";
    buttonText = "Find Jobs";
  } else {
    path = "/candidates-list";
    placeHolder = "students, keywords or skills";
    buttonText = "Find Students";
  }

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = new URLSearchParams();

    if (searchTerm) query.append("search", searchTerm);
    if (department) query.append("department", department);

    router.push(`${path}?${query.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <label className="title">What</label>
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="search"
            placeholder={placeHolder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <span className="icon flaticon-select"></span>
          <CustomFormSelect
            label="Department"
            name="department"
            selectName="department"
            data={departments}
            valueKey="id"
            labelKey="name"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button type="submit" className="theme-btn btn-style-one">
            <span className="btn-title">{buttonText}</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm2;
