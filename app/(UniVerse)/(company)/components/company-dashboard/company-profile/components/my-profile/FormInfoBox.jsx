'use client';

import { useAuth } from "@/contexts/AuthContext";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useForm } from "react-hook-form";
import companyProfileValidations from "@/constants/validations/company/companyProfileValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const FormInfoBox = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(companyProfileValidations),
        defaultValues: {
            name: user.user.data.name,
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
                            label="Company Name"
                            name="name"
                            register={register}
                            errors={errors.name}
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

                    {/* Portfolio */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Website URL"
                            name="websiteURL"
                            register={register}
                            errors={errors.portfolio}
                            type="url"
                        />
                    </div>

                    {/* LinkedIn */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Address"
                            name="address"
                            register={register}
                            errors={errors.address}
                            type="text"
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
