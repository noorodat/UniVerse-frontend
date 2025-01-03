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
import { getData } from "@/utils/getData";
import authEndpoints from "@/constants/endpoints/auth/authEndpoints";
import StudentFeatured from "@/components/job-featured/StudentFeatured";
import TopCompany from "./TopCompany";

export default async function IndexPage() {

  const { data: checkUser, error: checkUserError } = await getData(authEndpoints.checkVerification);

  if (checkUserError) return <CustomErrorPage title="Oops!" description="Something wrong happened while verifying the user!" />

  return (
    <>
      <DefaulHeader />

      <MobileMenu />

      <Hero />

      <Partners />

      <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
        <Departments />
      </Suspense>

      <Suspense fallback={<CustomSpinnerLoading fullPage={false} />}>
        {checkUser.user_type === "student" ? <JobFeatured /> : <StudentFeatured />}
      </Suspense>

      <Testimonial />

      <TopCompany />

      {checkUser?.user_type === "company" && <About />}

      <FooterDefault footerStyle="alternate" />
    </>
  );
}
