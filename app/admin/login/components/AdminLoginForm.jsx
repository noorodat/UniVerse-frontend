"use client"

import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import loginValidation from "@/constants/validations/auth/loginValidation";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import ForgotPasswordAndRememeberMe from "@/components/auth/login/ForgotPasswordAndRememeberMe";
import { login } from "@/server-actions/admin/auth/actions";
import { toast } from "react-toastify";

const AdminLoginForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginValidation),
    });
    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="form-inner">
            <h3 className="text-center">Admin Login</h3>

            {/* <!--Login Form--> */}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <ForgotPasswordAndRememeberMe />
                </div>

                <div className="form-group">
                    <CustomFormSubmittionButton
                        label="Login"
                        isLoading={isSubmitting}
                        className="theme-btn btn-style-one"
                    />
                </div>
                {/* login */}
            </form>
            {/* End form */}
        </div>
    );
};

export default AdminLoginForm;
