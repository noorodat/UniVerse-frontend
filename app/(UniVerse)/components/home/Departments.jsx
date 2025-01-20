import Link from "next/link";
import { getData } from "@/utils/get-data/getData";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";
import departmentEndPoints from "@/constants/endpoints/department/departmentEndPoints";

const Departments = async () => {

  const { data: departments, error } = await getData(departmentEndPoints.departments);

  if (error) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />

  return (
    <>
      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Job departments</h2>
          </div>
          <div className="row" data-aos="fade-up">
            {departments.map((department) => (
              <div
                className="category-block-two col-xl-3 col-lg-4 col-md-6 col-sm-12"
                key={department.id}
              >
                <div className="inner-box">
                  <div className="content">
                    <span className={`icon ${department.icon}`}></span>
                    <h4>
                      <Link href={`/job-list/${department.id}`}>{department.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
