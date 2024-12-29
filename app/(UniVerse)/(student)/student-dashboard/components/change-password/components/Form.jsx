"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import passwordValidation from "@/constants/validations/auth/passwordValidation";
import updatePassword from "@/server-actions/auth/updatePassword";
import { toast } from "react-toastify";

const Form = () => {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(passwordValidation),
  });

  const onSubmit = async (data) => {
    try {
      const res = await updatePassword(data);
      toast.success(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <CustomFormInput
            label="Old Password"
            name="oldPassword"
            register={register}
            errors={errors.oldPassword}
            type="password"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <CustomFormInput
            label="New Password"
            name="newPassword"
            register={register}
            errors={errors.newPassword}
            type="password"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <CustomFormInput
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            errors={errors.confirmPassword}
            type="password"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormSubmittionButton
            label="Update password"
            isLoading={isSubmitting}
            className="theme-btn btn-style-one"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
