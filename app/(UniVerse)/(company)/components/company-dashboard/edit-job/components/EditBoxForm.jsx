'use client';

import { useState } from "react";
import CustomMultiSelectWithAddition from "@/components/custom/select/CustomMultiSelectWithAddition";
import { useForm } from "react-hook-form";
import jobValidations from "@/constants/validations/job/jobValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import jobTypeData from "@/data/selectData/job/jobTypeData";
import CustomFormTextArea from "@/components/custom/inputs/CustomFormTextArea";
import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomAsyncSelect from "@/components/custom/select/CustomAsyncSelect";
import CustomFormSelect from "@/components/custom/select/CustomFormSelect";
import CustomDatePickerInput from "@/components/custom/inputs/CustomDatePickerInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useUser } from "@/contexts/UserContext";
import { updateJob } from "@/server-actions/job/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const EditBoxForm = ({ job, departments }) => {

  console.log(job);
  console.log(departments)

  const { id: userId } = useUser();
  const router = useRouter();

  const tagOptions = job.tags.map((tag) => ({ value: tag, label: tag }));
  const requirementOptions = job.requirements.map((req) => ({ value: req, label: req }));

  const [tags, setTags] = useState(tagOptions);
  const [newTag, setNewTag] = useState("");
  const [selectedTags, setSeletedTags] = useState(tagOptions);

  const [requirements, setRequirements] = useState(requirementOptions);
  const [newRequirement, setNewRequirement] = useState("");
  const [selectedRequirements, setSelectedRequirements] = useState(requirementOptions);

  const [endDate, setEndDate] = useState(job.end_date);

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
    resolver: zodResolver(jobValidations),
    defaultValues: {
      title: job.title,
      description: job.description,
      type: job.type,
      location: job.location,
      salary_range: job.salary_range,
      department_id: job.department.id,
      end_date: new Date(job.end_date),
      tags: selectedTags.map((tag) => tag.value),
      requirements: selectedRequirements.map((req) => req.value),
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await updateJob({
        ...data,
        tags: selectedTags.map((tag) => tag.value),
        requirements: selectedRequirements.map((req) => req.value),
        company_id: userId,
        status: true,
      }, job.id);
      toast.success(res);
      router.push('/company-dashboard/manage-jobs');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Job Title */}
        <div className="form-group col-lg-12 col-md-12">
          <CustomFormInput
            label="Job Title"
            name="title"
            register={register}
            errors={errors.title}
            type={'text'}
          />
        </div>

        {/* Job Description */}
        <div className="form-group col-lg-12 col-md-12">
          <CustomFormTextArea
            label={"Job Description"}
            placeholder={'Write a Job Description'}
            name={'description'}
            register={register}
            errors={errors.description}
          />
        </div>

        {/* Job Type */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormSelect
            label={"Job Type (optional)"}
            name={'type'}
            data={jobTypeData}
            register={register}
            errors={errors.type}
            labelKey="option"
            valueKey="option"
          />
        </div>

        {/* Salary Range */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormInput
            label="Salary Range (optional)"
            name="salary_range"
            register={register}
            errors={errors.salary_range}
            type={'text'}
          />
        </div>

        {/* Industry */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormSelect
            name={"department_id"}
            selectName={'job field'}
            data={departments}
            register={register}
            errors={errors.department_id}
            label={"job field"}
            valueKey={"id"}
            labelKey={"name"}
            defaultValue={job.department.id}
          />
        </div>

        { /* Job Post Deadline */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomDatePickerInput
            label="Job post deadline"
            value={endDate}
            setValue={(name, date) => {
              setEndDate(date);
              setValue(name, date);
            }}
            name="end_date"
            errors={errors.end_date}
          />
        </div>

        {/* Tags Select with Add Feature */}
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Tags{" "}
            <small className="text-info">
              (Makes it easy for students to reach your job post)
            </small>
          </label>
          <CustomMultiSelectWithAddition
            selectName="tags"
            elements={tags}
            setElements={setTags}
            newElement={newTag}
            setNewElement={setNewTag}
            selectedElements={selectedTags}
            setSeletedElements={setSeletedTags}
            btnTheme="three"
            register={register}
            errors={errors.tags}
            setValue={setValue}
          />
        </div>

        {/* Requirements Select with Add Feature */}
        <div className="form-group col-lg-12 col-md-12">
          <label>
            Requirements{" "}
            <small className="text-info">
              (Add your job requirements)
            </small>
          </label>
          <CustomMultiSelectWithAddition
            selectName="requirements"
            elements={requirements}
            setElements={setRequirements}
            newElement={newRequirement}
            setNewElement={setNewRequirement}
            selectedElements={selectedRequirements}
            setSeletedElements={setSelectedRequirements}
            inputType="textarea"
            btnTheme="three"
            register={register}
            errors={errors.requirements}
            setValue={setValue}
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-12 col-md-12 text-right margin-top-10">
          <CustomFormSubmittionButton
            label={<span>Edit job <i className={`la la-edit`}></i></span>}
            isLoading={isSubmitting}
            className="theme-btn btn-style-one w-100"
          />
        </div>
      </div>
    </form>
  );
};

export default EditBoxForm;
