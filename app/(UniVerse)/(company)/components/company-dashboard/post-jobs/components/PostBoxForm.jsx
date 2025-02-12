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
import CustomDatePickerInput from "@/components/custom/inputs/CustomDatePickerInput";
import CustomFormSelect from "@/components/custom/select/CustomFormSelect";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useUser } from "@/contexts/UserContext";
import { postJob } from "@/server-actions/job/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const PostBoxForm = ({ departments }) => {

  const { id: userId } = useUser();
  const router = useRouter();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [selectedTags, setSeletedTags] = useState([]);

  const [requirements, setRequirements] = useState([]);
  const [newRequirement, setNewRequirement] = useState("");
  const [selectedRequirements, setSelectedRequirements] = useState([]);
  const [endDate, setEndDate] = useState(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
    resolver: zodResolver(jobValidations),
  });

  const onSubmit = async (data) => {
    try {
      console.log({
        ...data,
        tags: selectedTags.map((tag) => tag.value),
        requirements: selectedRequirements.map((req) => req.value),
        company_id: userId,
        is_active: true,
      });
      const res = await postJob({
        ...data,
        department: parseInt(data.department),
        tags: selectedTags.map((tag) => tag.value),
        requirements: selectedRequirements.map((req) => req.value),
        company_id: userId,
        status: true,
      });
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
            label={"Job Type"}
            name={'type'}
            data={jobTypeData}
            register={register}
            errors={errors.type}
            selectName={'Job type'}
            valueKey="option"
            labelKey="option"
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

        {/* Job field */}
        <div className="form-group col-lg-6 col-md-12">
          <CustomFormSelect
            name={"department_id"}
            selectName={'job field'}
            data={departments}
            register={register}
            errors={errors.department_id}
            label={"Job field"}
            valueKey={"id"}
            labelKey={"name"}
          />
        </div>


        {/* Start date picker */}

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

        {/* End date picker */}

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
            label={<span>Post job <i className={`la la-send`}></i></span>}
            isLoading={isSubmitting}
            className="theme-btn btn-style-one w-100"
          />
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
