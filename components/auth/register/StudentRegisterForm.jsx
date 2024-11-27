"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import studentSignup from "@/server-actions/auth/student/studentSignup";
import studentSignupValidation from "@/constants/validations/auth/studentSignupValidation";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function StudentRegisterForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(studentSignupValidation),
    });
    const onSubmit = async (data) => {
        try {
            await studentSignup(data.firstName, data.lastName, data.email, data.password);
            router.push(`/verify_email?email=${data.email}&user_type=${'student'}`);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <CustomFormInput
                    label="First name"
                    errors={errors.firstName}
                    register={register}
                    name="firstName"
                    type="text"
                />
            </div>

            <div className="form-group">
                <CustomFormInput
                    label="Last name"
                    errors={errors.lastName}
                    register={register}
                    name="lastName"
                    type="text"
                />
            </div>

            <div className="form-group">
                <CustomFormInput
                    label="Email"
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
                <CustomFormSubmittionButton
                    label="Register"
                    isLoading={isSubmitting}
                    className="theme-btn btn-style-one"
                />
            </div>
        </form >
    );
}
