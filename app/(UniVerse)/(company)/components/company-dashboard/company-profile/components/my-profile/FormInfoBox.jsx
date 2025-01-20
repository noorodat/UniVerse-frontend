'use client';

import CustomFormInput from "@/components/custom/inputs/CustomFormInput";
import CustomFormSubmittionButton from "@/components/custom/buttons/CustomFormSubmittionButton";
import { useForm } from "react-hook-form";
import companyProfileValidations from "@/constants/validations/company/companyProfileValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/UserContext";
import { getCountries } from "@/externalAPIs/RESTCountriesAPI";
import AsyncSelect from "react-select/async";
import updateCompanyProfile from "@/server-actions/auth/company/profile/updateCompanyProfile";
import CustomFormTextArea from "@/components/custom/inputs/CustomFormTextArea";

const FormInfoBox = () => {
    const { userProfile } = useUser();
    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
        resolver: zodResolver(companyProfileValidations),
        defaultValues: {
            name: userProfile.name,
            email: userProfile.email,
            website_url: userProfile.website_url,
            phone: userProfile.phone,
            country: userProfile.country,
            city: userProfile.city,
            address: userProfile.address,
            industry: userProfile.industry,
        },
    });

    const loadCountries = async (inputValue) => {
        try {
            const countries = await getCountries();
            return countries
                .filter(country =>
                    country.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map(country => ({ label: country.name, value: country.name }));
        } catch (error) {
            toast.error("Failed to load countries.");
            return [];
        }
    };

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const message = await updateCompanyProfile(data);
            toast.success(message)
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="form-inner">
            <form onSubmit={handleSubmit(onSubmit)} className="default-form">
                <div className="row">
                    {/* Name */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Company Name"
                            name="name"
                            register={register}
                            errors={errors.name}
                            type="text"
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Email"
                            name="email"
                            register={register}
                            errors={errors.email}
                            type="email"
                            disabled
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Phone"
                            name="phone"
                            register={register}
                            errors={errors.phone}
                            type="text"
                        />
                    </div>

                    {/* Industry */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Industry"
                            name="industry"
                            register={register}
                            errors={errors.industry}
                            type="text"
                        />
                    </div>

                    {/* Website URL */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Website URL"
                            name="website_url"
                            register={register}
                            errors={errors.website_url}
                            type="url"
                        />
                    </div>

                    {/* Country */}
                    <div className="form-group col-lg-6 col-md-12">
                        <label>Country</label>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            loadOptions={loadCountries}
                            onChange={(selectedOption) =>
                                setValue("country", selectedOption.value)
                            }
                            placeholder={userProfile.country}
                        />
                    </div>

                    {/* City */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="City"
                            name="city"
                            register={register}
                            errors={errors.city}
                            type="text"
                        />
                    </div>

                    {/* Address */}
                    <div className="form-group col-lg-6 col-md-12">
                        <CustomFormInput
                            label="Address"
                            name="address"
                            register={register}
                            errors={errors.address}
                            type="text"
                        />
                    </div>

                    <div className="form-group col-lg-12 col-md-12">
                        <CustomFormTextArea
                            label="About company"
                            name="about"
                            register={register}
                            errors={errors.about}
                            type="text"
                        />
                    </div>

                </div>

                <div className="form-group">
                    <CustomFormSubmittionButton
                        label="Save"
                        isLoading={isSubmitting}
                        className="theme-btn btn-style-one"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormInfoBox;
