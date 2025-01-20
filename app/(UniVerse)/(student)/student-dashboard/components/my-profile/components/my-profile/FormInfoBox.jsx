'use client';

import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useForm } from "react-hook-form";
import studentProfileValidations from "@/constants/validations/student/studentProfileValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/UserContext";
import updateStudentProfile from "@/server-actions/auth/student/profile/updateStudentProfile";
import { useState } from "react";
import CustomFormSelect from "@/components/custom/select/CustomFormSelect";
import CustomMultiSelectWithAddition from "@/components/custom/select/CustomMultiSelectWithAddition";

const FormInfoBox = ({ universities, departments }) => {

  const { userProfile } = useUser();

  const skillOptions = userProfile.skills.map((skill) => ({ value: skill, label: skill }));

  const [skills, setSkills] = useState(skillOptions || []);
  const [newSkill, setNewSkill] = useState("");
  const [selectedSkills, setSeletedSkills] = useState(skillOptions);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, setValue
  } = useForm({
    resolver: zodResolver(studentProfileValidations),
    defaultValues: {
      first_name: userProfile.first_name,
      last_name: userProfile.last_name,
      email: userProfile.email,
      phone: userProfile.phone ? "0" + userProfile.phone : null,
      university: userProfile.university?.id || null,
      department: userProfile.department?.id || null,
      github: userProfile.github,
      linkedin: userProfile.linkedin,
      portfolio: userProfile.portfolio,
      skills: selectedSkills.map((skill) => skill.value) || [],
    },
  });


  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        skills: selectedSkills.map((skill) => skill.value),
        university: parseInt(data.university),
        department: parseInt(data.department)
      };
      const message = await updateStudentProfile(payload);
      toast.success(message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="form-inner">
      <form onSubmit={handleSubmit(onSubmit)} className="default-form">
        <div className="row">
          {/* First Name */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="First Name"
              name="first_name"
              register={register}
              errors={errors.first_name}
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="Last Name"
              name="last_name"
              register={register}
              errors={errors.last_name}
              type="text"
            />
          </div>

          {/* Phone */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="Phone"
              name="phone"
              register={register}
              errors={errors.phone}
              type="text"
            />
          </div>

          {/* Email */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="Email"
              name="email"
              register={register}
              errors={errors.email}
              type="email"
              disabled
            />
          </div>

          {/* University */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormSelect
              name={"university_id"}
              selectName={'university'}
              data={universities}
              register={register}
              errors={errors.university_id}
              label={"University"}
              valueKey={"id"}
              labelKey={"name"}
              defaultValue={userProfile.university?.id}
            />
          </div>

          {/* Department */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormSelect
              name={"department_id"}
              selectName={'department'}
              data={departments}
              register={register}
              errors={errors.department_id}
              label={"Department"}
              valueKey={"id"}
              labelKey={"name"}
              defaultValue={userProfile.department?.id}
            />
          </div>

          <div className="form-group col-lg-12 col-md-12">
            <label>Skills</label>
            <CustomMultiSelectWithAddition
              selectName="skills"
              elements={skills}
              setElements={setSkills}
              newElement={newSkill}
              setNewElement={setNewSkill}
              selectedElements={selectedSkills}
              setSeletedElements={setSeletedSkills}
              btnTheme="three"
              register={register}
              setValue={setValue}
            />
          </div>

          {/* Portfolio */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="Portfolio Link"
              name="portfolio"
              register={register}
              errors={errors.portfolio}
              type="url"
            />
          </div>

          {/* LinkedIn */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="LinkedIn"
              name="linkedin"
              register={register}
              errors={errors.linkedin}
              type="url"
            />
          </div>

          {/* GitHub */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="GitHub"
              name="github"
              register={register}
              errors={errors.github}
              type="url"
            />
          </div>
        </div>

        <div className="form-group">
          <CustomFormSubmittionButton
            label="Save"
            isLoading={isSubmitting}
            className="theme-btn btn-style-one"
          />
        </div>
      </form>
    </div>
  );
};

export default FormInfoBox;
