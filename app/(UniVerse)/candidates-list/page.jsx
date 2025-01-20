import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list";
import studentEndPoints from "@/constants/endpoints/student/studentEndPoints";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import CustomSpinnerLoading from "@/components/custom/loading/CustomSpinnerLoading";
import { Suspense } from "react";


export const metadata = {
  title: 'Students List || UniVerse',
  description:
    'Superio - Job Borad React NextJS Template',

}

const index = async ({ searchParams }) => {

  const { search, department } = searchParams;

  const isSearch = search || department;
  const endpoint = isSearch ? studentEndPoints.searchStudents : studentEndPoints.getStudents;

  const studentEndpoint = new URLSearchParams();
  if (search) studentEndpoint.append("search", search);
  if (department) studentEndpoint.append("department", department);


  const { data: students, error: studentsError } = await getData(
    `${endpoint}?${studentEndpoint.toString()}`
  );
  const { data: departments, error: departmentsError } = await getData(departmentEndPoints.departments);


  if (studentsError || departmentsError) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <Suspense fallback={<CustomSpinnerLoading />}>
        <CandidatesList students={students} departments={departments} />
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
