'use client'

import Awards from "./award/Awards";
import Experiences from "./experience/Experiences";
import Education from "./education/Education";
import SkillsMultiple from "./SkillsMultiple";

const index = () => {
  return (
      <div className="row">
        {/* <!-- Input --> */}
{/* 
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Tell the companies about yourself :)"></textarea>
        </div> */}
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-12 col-md-12">
          <Education />
          {/* <!-- Resume / Education --> */}

          <Experiences />
          {/* <!-- Resume / Work & Experience --> */}
        </div>
        {/* <!--  education and word-experiences --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Awards --> */}
          <Awards />
        </div>
        {/* <!-- End Award --> */}

        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Skills </label>
          <SkillsMultiple />
        </div> */}
        {/* <!-- Multi Selectbox --> */}
        {/* <!-- Input --> */}
      </div>

  );
};

export default index;
