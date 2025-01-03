import React from 'react';

export default function CustomFormSelect({
    label,
    name,
    selectName,
    data,
    register,
    errors,
    valueKey = "id",
    labelKey = "option",
    ...rest
}) {
    return (
        <>
            <label>{label}</label>
            {errors && <p className="text-red mt-2">{errors.message}</p>}
            <select
                className="chosen-single form-select"
                name={name}
                {...(register ? register(name) : {})}
                {...rest}
            >
                <option value="">Select a {selectName}</option>
                {data?.map((ele) => (
                    <option key={ele[valueKey]} value={ele[valueKey]}>
                        {ele[labelKey]}
                    </option>
                ))}
            </select>
        </>
    );
}