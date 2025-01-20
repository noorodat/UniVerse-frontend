import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";

const FilterSidebar = () => {
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

                {/* <div className="filter-block">
                    <h4>Compnay Size</h4>
                    <div className="form-group">
                        <CompanySize />
                    </div>
                </div> */}
            </div>
            {/* Filter Outer */}
        </div>
    );
};

export default FilterSidebar;
