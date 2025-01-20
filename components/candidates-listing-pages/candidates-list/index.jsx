import FooterDefault from "../../footer/common-footer";
import Breadcrumb from "../../common/Breadcrumb";

import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import FilterSidebar from "./FilterSidebar";

const Index = ({ students, departments }) => {

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Students" meta="Students" />
      {/* <!--End Breadcrumb Start--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                <FilterSidebar departments={departments} />
              </div>
            </div>
            {/* End filter column for tablet and mobile devices */}

            <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
              <FilterSidebar departments={departments} />
            </div>
            {/* <!-- End Filters Column for destop and laptop --> */}

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterTopBox students={students} />
                {/* <!-- ls Switcher --> */}
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index;
