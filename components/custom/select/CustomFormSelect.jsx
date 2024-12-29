import React from 'react'

export default function CustomFormSelect({ label, name, data, register, errors, ...rest }) {
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
                <option value="">Select a {name}</option>
                {data.map((ele) => (
                    <option key={ele.id} value={ele.option}>
                        {ele.option}
                    </option>
                ))}
            </select>
        </>
    )
}
