import React from 'react'

export default function CustomFormTextArea({ label, placeholder, name, register, errors, ...rest }) {
    return (
        <>
            <label>{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                {...(register ? register(name) : {})}
                {...rest}
            >

            </textarea>
            {errors && <p className="text-red mt-2">{errors.message}</p>}
        </>
    )
}
