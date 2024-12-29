"use client"
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import studentEmailValidation from "@/constants/validations/auth/studentEmailValidation";
import companyEmailValidation from "@/constants/validations/auth/companyEmailValidation";
import updateEmail from "@/server-actions/auth/updateEmail";
import { toast } from "react-toastify";

const Form = () => {

  const { email, userType } = useAuth();
  const emailValidations = userType == 'student' ? studentEmailValidation : companyEmailValidation;
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(emailValidations),
    defaultValues: {
      oldEmail: email
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateEmail(data, userType);
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
            label="Old Email"
            name="oldEmail"
            register={register}
            errors={errors.oldEmail}
            type="text"
            disabled
          />
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <CustomFormInput
            label="New Email"
            name="newEmail"
            register={register}
            errors={errors.newEmail}
            type="text"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <CustomFormInput
            label="Confirm Email"
            name="confirmEmail"
            register={register}
            errors={errors.confirmEmail}
            type="text"
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormSubmittionButton
            label="Change email"
            isLoading={isSubmitting}
            className="theme-btn btn-style-one"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
