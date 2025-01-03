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
        console.log(data);
        try {
            await studentSignup(data);
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
                    errors={errors.first_name}
                    register={register}
                    name="first_name"
                    type="text"
                />
            </div>

            <div className="form-group">
                <CustomFormInput
                    label="Last name"
                    errors={errors.last_name}
                    register={register}
                    name="last_name"
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
