import React from "react";
import companySignupValidation from "@/constants/validations/auth/companySignupValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import companySignup from "@/server-actions/auth/company/companySignup";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomFileInput from "@/components/custom/inputs/CustomFileInput";

export default function CompanyRegisterForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(companySignupValidation),
    });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);

        if (data.proof_document?.[0]) {
            formData.append("proof_document", data.proof_document[0]);
        }

        console.log(formData.get("proof_document"));
        // return;

        try {
            await companySignup(formData);
            router.push(`/verify_email?email=${data.email}&user_type=company`);
        } catch (error) {
            toast.error(error.message || "Something went wrong");
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
                <CustomFileInput
                    label="Proof Document"
                    register={register}
                    name="proof_document"
                    errors={errors.proof_document}
                />
            </div>

            <div className="form-group">
                <CustomFormSubmittionButton
                    label="Register"
                    isLoading={isSubmitting}
                    className="theme-btn btn-style-one"
                />
            </div>
        </form>
    );
}
