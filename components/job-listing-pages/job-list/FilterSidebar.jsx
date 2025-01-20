
'use client'

import CallToActions from "../components/CallToActions";
import Departments from "../components/Departments";
import FilterDepartments from "./FilterDepartments";
import DatePosted from "../components/DatePosted";
import ExperienceLevel from "../components/ExperienceLevel";
import JobType from "../components/JobType";
import LocationBox from "../components/LocationBox";
import SalaryRangeSlider from "../components/SalaryRangeSlider";
import SearchBox from "../components/SearchBox";
import Tag from "../components/Tag";

const FilterSidebar = ({ departments }) => {
  return (
    <div className="inner-column">
      <div className="filters-outer">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}

        <div className="filter-block">
          <h4>Search by Keywords</h4>
          <div className="form-group">
            <SearchBox />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Location</h4>
          <div className="form-group">
            <LocationBox />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Department</h4>
          <div className="form-group">
            <FilterDepartments departments={departments} />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="switchbox-outer">
          <h4>Job type</h4>
          <JobType />
        </div>
        {/* <!-- Switchbox Outer --> */}
        {/* <!-- Filter Block --> */}
      </div>
      {/* Filter Outer */}
    </div>
  );
};

export default FilterSidebar;
