import FilterDepartments from "@/components/job-listing-pages/job-list/FilterDepartments";
import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";

const FilterSidebar = ({ departments }) => {
    return (
        <div className="inner-column pd-right">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                <div className="filter-block">
                    <h4>Search by name</h4>
                    <div className="form-group">
                        <SearchBox />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>University</h4>
                    <div className="form-group">
                        <LocationBox />
                    </div>
                    {/* 
                    <p>Radius around selected destination</p>
                    <DestinationRangeSlider /> */}
                </div>
                {/* <!-- Filter Block --> */}

                <div className="filter-block">
                    <h4>Department</h4>
                    <div className="form-group">
                        <FilterDepartments departments={departments} />
                    </div>
                </div>
                {/* <!-- Filter Block --> */}

                {/* <div className="filter-block">
                    <h4>Candidate Gender</h4>
                    <div className="form-group">
                        <CandidatesGender />
                    </div>
                </div> */}
                {/* <!-- Filter Block --> */}

                {/* <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <DatePosted />
                </div> */}
                {/* <!-- Filter Block --> */}

                {/* <div className="checkbox-outer">
                    <h4>Experience</h4>
                    <Experience />
                </div> */}
                {/* <!-- Filter Block --> */}

                {/* <div className=" checkbox-outer">
                    <h4>Qualification</h4>
                    <Qualification />
                </div> */}
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;
