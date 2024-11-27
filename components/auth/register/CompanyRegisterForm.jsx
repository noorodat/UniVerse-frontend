import React from "react";
import companySignupValidation from "@/constants/validations/auth/companySignupValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import companySignup from "@/server-actions/auth/company/companySignup";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CompanyRegisterForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(companySignupValidation),
    });

    const onSubmit = async (data) => {
        try {
            await companySignup(data.name, data.email, data.password);
            router.push(`/verify_email?email=${data.email}&user_type=${'company'}`);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <CustomFormInput
                    label="Company Name"
                    errors={errors.name}
                    register={register}
                    name="name"
                    type="text"
                />
            </div>
            <div className="form-group">
                <CustomFormInput
                    label="Company email"
                    errors={errors.email}
                    register={register}
                    name="email"
                    type="email"
                />
            </div>
            <div className="form-group">
                <CustomFormInput
                    label="Password"
                    errors={errors.password}
                    register={register}
                    name="password"
                    type="password"
                />
            </div>
            <div className="form-group">
                <CustomFormSubmittionButton label="Register" isLoading={isSubmitting} />
            </div>
        </form>
    );
}
