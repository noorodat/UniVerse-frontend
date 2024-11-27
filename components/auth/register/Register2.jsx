
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import StudentRegisterForm from "./StudentRegisterForm";
import CompanyRegisterForm from "./CompanyRegisterForm";

const Register2 = () => {
  return (
    <div className="form-inner">
      <h3 className="text-center">Create a UniVerse Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Student
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <StudentRegisterForm />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <CompanyRegisterForm />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link href="/login" className="call-modal login">
            LogIn
          </Link>
        </div>
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register2;
