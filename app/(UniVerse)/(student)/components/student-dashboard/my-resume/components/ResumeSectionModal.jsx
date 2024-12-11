"use client";
import { formFieldConfig, formSchema } from "@/config/resumeFormConfig";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";

const ResumeSectionModal = ({ sectionType, operation, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(formSchema[sectionType]),
    });

    const fields = formFieldConfig[sectionType] || [];

    return (
        <div
            className="modal fade"
            id={`${operation}${sectionType}Modal`}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg login-modal modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <button
                        type="button"
                        className="closed-modal"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    <div className="modal-body">
                        <div id="login-modal">
                            <div className="form-inner">
                                <h3 className="mb-3">
                                    {operation === "add" && `Add ${sectionType}`}
                                    {operation === "edit" && `Edit ${sectionType}`}
                                    {operation === "delete" && `Delete ${sectionType}`}
                                </h3>
                                {operation !== "delete" ? (
                                    <form className="default-form" onSubmit={handleSubmit((data) => onSubmit(sectionType, operation, data))}>
                                        {fields.map(({ name, label, type }) => {
                                            console.log
                                            if (name === "start_date" || name === "end_date") {
                                                return null;
                                            }
                                            return (
                                                <div key={name} className="form-group">

                                                    {type === "textarea" ? (
                                                        <>
                                                            <label>{label}</label>
                                                            <textarea
                                                                {...register(name)}
                                                                className="form-control"
                                                            ></textarea>
                                                            <p className="text-red small-text">{errors[name]?.message}</p>
                                                        </>
                                                    ) : (
                                                        <CustomFormInput
                                                            label={label}
                                                            name={name}
                                                            type={type}
                                                            register={register}
                                                            errors={errors[name]}
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                        <div className="form-group d-flex justify-content-between gap-3">
                                            <div className="w-50">
                                                <label>From</label>
                                                <input
                                                    type="date"
                                                    {...register("start_date")}
                                                    className="form-control"
                                                />
                                                <p className="text-red small-text">{errors["start_date"]?.message}</p>
                                            </div>
                                            <div className="w-50">
                                                <label>To</label>
                                                <input
                                                    type="date"
                                                    {...register("end_date")}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <CustomFormSubmittionButton
                                                label="Save"
                                                isLoading={isSubmitting}
                                                className="theme-btn btn-style-one w-100"
                                            />
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        <p>Are you sure you want to delete this {sectionType}?</p>
                                        <button
                                            className="theme-btn btn-style-one"
                                            onClick={() => onSubmit(sectionType, operation, null)}
                                            data-bs-dismiss="modal"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeSectionModal;
