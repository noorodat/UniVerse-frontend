'use client';

import { useAuth } from "@/contexts/AuthContext";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useForm } from "react-hook-form";
import studentProfileValidations from "@/constants/validations/student/studentProfileValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const FormInfoBox = ({ universities, departments }) => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(studentProfileValidations),
    defaultValues: {
      firstName: user.user.data.first_name,
      lastName: user.user.data.last_name,
      email: user.user.email,
    },
  });

  const onSubmit = async (data) => {
    try {
      // Save form data (API call or update logic here)
      console.log("Form submitted:", data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to save profile.");
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
              name="firstName"
              register={register}
              errors={errors.firstName}
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="form-group col-lg-6 col-md-12">
            <CustomFormInput
              label="Last Name"
              name="lastName"
              register={register}
              errors={errors.lastName}
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
            <label>University</label>
            <select
              className="chosen-single form-select"
              {...register("university")}
            >
              <option disabled selected className="fw-bold">Select your university</option>
              {universities.map((university) => (
                <option key={university.name} value={university.name}>
                  {university.name}
                </option>
              ))}
            </select>
            {errors.university && <p className="error-text">{errors.university.message}</p>}
          </div>

          {/* Department */}
          <div className="form-group col-lg-6 col-md-12">
            <label>Department</label>
            <select
              className="chosen-single form-select"
              {...register("department")}
            >
              <option className="fw-bold" disabled selected>Select your department</option>
              {departments.map((department) => (
                <option key={department.name} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
            {errors.department && <p className="error-text">{errors.department.message}</p>}
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
