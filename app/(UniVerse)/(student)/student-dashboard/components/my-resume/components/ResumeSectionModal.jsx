"use client";
import { formFieldConfig, formSchema } from "@/config/resumeFormConfig";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import { useUser } from "@/contexts/UserContext";
import { toast } from "react-toastify";

const ResumeSectionModal = ({ sectionType, operation, onSubmit, index, data }) => {
    const operations = ["add", "edit", "delete"];
    const sectionTypes = ["education", "award", "experience", "CV", "job"];
    if (!operations.includes(operation) || !sectionTypes.includes(sectionType)) {
        toast.error("Invalid operation or section type");
        return null;
    }
    const { id: student } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(formSchema[sectionType]),
        defaultValues: data,
    });

    const fields = formFieldConfig[sectionType] || [];

    const handleFormSubmit = (student, onSubmit) => (formData) => {
        const updatedData = { ...formData, student };
        operation === "add" ? onSubmit(updatedData) : onSubmit(updatedData, data.id);
    };

    return (
        <div
            className="modal fade"
            id={`${operation}-${index}${sectionType}-${index}Modal`}
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
                                    <form className="default-form" onSubmit={handleSubmit(handleFormSubmit(student, onSubmit))}>
                                        {fields.map(({ name, label, type }) => {
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
                                            {fields.some((field) => field.name === "end_date") && (
                                                <div className="w-50">
                                                    <label>To</label>
                                                    <input
                                                        type="date"
                                                        {...register("end_date")}
                                                        className="form-control"
                                                    />
                                                    <p className="text-red small-text">{errors["end_date"]?.message}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <CustomFormSubmittionButton
                                                label="Save"
                                                isLoading={isSubmitting}
                                                className="theme-btn btn-style-one w-100"
                                                data-bs-dismiss="modal"
                                            />
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        <p>Are you sure you want to delete this {sectionType}?</p>
                                        <button
                                            className="theme-btn btn-style-one w-100"
                                            onClick={() => onSubmit(data.id)}
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
