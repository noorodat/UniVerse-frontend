'use client';

import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useForm } from "react-hook-form";
import studentProfileValidations from "@/constants/validations/student/studentProfileValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/UserContext";
import updateStudentProfile from "@/server-actions/auth/student/profile/updateStudentProfile";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { getSkills } from "@/externalAPIs/APILayerSkills";
import { useState } from "react";
import AsyncSelect from 'react-select/async';
import CustomFormSelect from "@/components/custom/select/CustomFormSelect";

const FormInfoBox = ({ universities, departments }) => {
  console.log(universities)
  const [skillsLoading, setSkillsLoading] = useState(false);
  const { userProfile } = useUser();
  const [skills, setSkills] = useState(userProfile.skills);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
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
      skills: userProfile.skills?.map((skill) => ({ label: skill, value: skill })) || [],
    },
  });

  const handleSkillsSelection = async (inputValue) => {
    if (!inputValue) return;
    try {
      setSkillsLoading(true);
      const fetchedSkills = await getSkills(inputValue);
      const transformedSkills = fetchedSkills?.map((skill) => ({
        value: skill,
        label: skill,
      }));
      setSkills(transformedSkills);
    } catch (error) {
      toast.error("Failed to fetch skills.");
    } finally {
      setSkillsLoading(false);
    }
  };


  const onSubmit = async (data) => {
    console.log({
      ...data,
      skills: skills,
      university: parseInt(data.university),
      department: parseInt(data.department),
    })
    try {
      const payload = {
        ...data,
        skills: skills,
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

          <div className="form-group col-lg-6 col-md-12">
            <label>Skills</label>
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={skills.map((skill) => ({ label: skill.value, value: skill.value }))}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isLoading={skillsLoading}
                  onInputChange={(inputValue) => {
                    handleSkillsSelection(inputValue);
                  }}
                  onChange={(selectedOptions) => {
                    // Update the field value in react-hook-form
                    field.onChange(selectedOptions);
                    setSkills(selectedOptions.map((skill) => skill.value))
                    console.log(selectedOptions.map((skill) => skill.value));
                  }}
                  value={field.value}
                />
              )}
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
