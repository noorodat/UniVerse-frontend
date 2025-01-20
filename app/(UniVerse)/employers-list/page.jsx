import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list";
import { getData } from "@/utils/get-data/getData";
import { Suspense } from "react";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import companyEndPoints from "@/constants/endpoints/company/companyEndPoints";

export const metadata = {
  title: "Employers List V2 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {

  const { data: companies, error } = await getData(companyEndPoints.getCompanies, true, 0);

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <EmployersList companies={companies} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
