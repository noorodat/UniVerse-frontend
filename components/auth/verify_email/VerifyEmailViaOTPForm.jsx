"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import verifyOTPValidation from "@/constants/validations/auth/verifyOTPValidation";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import verifyStudentOTP from "@/server-actions/auth/student/verifyStudentOTP";
import verifyCompanyOTP from "@/server-actions/auth/company/verifyCompanyOTP";
import notFound from "@/app/not-found";
import { Spinner } from "react-bootstrap";
import CustomServerActionButton from "@/components/custom/buttons/CustomServerActionButton";
import requestNewStudentOTP from "@/server-actions/auth/student/requestNewStudentOTP";
import requestNewCompanyOTP from "@/server-actions/auth/company/requestNewCompanyOTP";
import { toast } from "react-toastify";
import CustomSpinnerLoadingButton from "@/components/custom/loading/CustomSpinnerLoadingButton";

export default function VerifyEmailViaOTPForm() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const userType = searchParams.get('user_type');
    let transitionFunction = null;

    if (!email)
        return notFound();

    if (userType == 'student') {
        transitionFunction = requestNewStudentOTP;
    } else if (userType == 'company') {
        transitionFunction = requestNewCompanyOTP;
    }

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(verifyOTPValidation),
    });

    const onSubmit = async (data) => {
        try {
            if (userType == 'student') {
                await verifyStudentOTP(email, data.OTP)
            } else if (userType == 'company') {
                await verifyCompanyOTP(email, data.OTP)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="default-form d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center p-3 fw-bold">UniVerse</h1>
                <h5 className="pb-2">Verify your email: <span className="text-primary">{email}</span> with the OTP sent.</h5>
                <div className="form-group d-flex flex-column justify-content-center align-items-center pt-4">
                    <CustomFormInput
                        label={`OTP:`}
                        errors={errors.OTP}
                        register={register}
                        name="OTP"
                        type="text"
                        maxLength={6}
                        className="text-center fs-2 w-50 align-self-center"
                        containerStyles=""
                        labelStyles="text-center w-100"
                    />
                </div>
                <div className="form-group d-flex justify-content-center flex">
                    <CustomFormSubmittionButton
                        label="Validate"
                        isLoading={isSubmitting}
                        className="theme-btn btn-style-one"
                    />
                </div>
                <CustomServerActionButton
                    label={'Resend OTP'}
                    transitionFunction={() => transitionFunction(email)}
                    pendingMessage={<CustomSpinnerLoadingButton />}
                    className="theme-btn btn-style-three call-modal small"
                />
            </form>

        </>
    );
}
