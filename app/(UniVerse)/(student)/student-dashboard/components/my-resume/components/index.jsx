import Awards from "./award/Awards";
import Experiences from "./experience/Experiences";
import Education from "./education/Education";
import { getData } from "@/utils/get-data/getData";
import studentResumeEndpoints from "@/constants/endpoints/resume/studentResumeEndpoints";
import CustomErrorPage from "@/components/custom/errors/CustomErrorPage";

const index = async () => {

  const { data: educations, error: educationsError } = await getData(studentResumeEndpoints.getEducations, true, 0);
  const { data: awards, error: awardsError } = await getData(studentResumeEndpoints.getAwards, true, 0);
  const { data: experiences, error: experiencesError } = await getData(studentResumeEndpoints.getExperiences, true, 0);

  if (educationsError || awardsError || experiencesError) return <CustomErrorPage title={'Oops!'} description={'Something wrong happened!'} />


  return (
    <div className="row">

      <div className="form-group col-lg-12 col-md-12">
        <Education educations={educations} />

        <Experiences experiences={experiences} />
      </div>
      <div className="form-group col-lg-12 col-md-12">
        <Awards awards={awards} />
      </div>
    </div>

  );
};

export default index;
