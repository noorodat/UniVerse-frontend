import FooterDefault from "../../../../components/footer/common-footer";

import Hero from "@/app/(UniVerse)/components/home/hero";
import Partners from "@/app/(UniVerse)/components/home/Partners";
import Departments from "@/app/(UniVerse)/components/home/Departments";
import JobFeatured from "@/app/(UniVerse)/components/home/JobFeatured";
import Testimonial from "@/app/(UniVerse)/components/home/Testimonial";
import About from "@/app/(UniVerse)/components/home/About";
import MobileMenu from "../../../../components/header/MobileMenu";
import DefaulHeader from "../../../../components/header/DefaulHeader";
import { Suspense } from "react";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { getData } from "@/utils/get-data/getData";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import StudentFeatured from "@/components/job-featured/StudentFeatured";
import TopCompany from "./TopCompany";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";

export default async function IndexPage() {

  const { data: checkUser, error: checkUserError } = await getData(authEndpoints.checkVerification);
  const { data: departments, error: departmentsError } = await getData(departmentEndPoints.departments);
  const { data: companies, error: companiesError } = await getData(companyEndPoints.featuredCompanies);

  if (checkUserError || departmentsError || companiesError) return <CustomErrorPage title="Oops!" description="Something wrong happened while verifying the user!" />

  return (
    <>
      <DefaulHeader />

      <MobileMenu />

      <Hero departments={departments} />

      <Partners />

      <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
        {checkUser.user_type === "student" ? <Departments /> : null}
      </Suspense>

      <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
        {checkUser.user_type === "student" ? <JobFeatured /> : <StudentFeatured />}
      </Suspense>

      <Testimonial />

      <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
        <TopCompany companies={companies} />
      </Suspense>

      {checkUser?.user_type === "company" && <About />}

      <FooterDefault footerStyle="alternate" />
    </>
  );
}
