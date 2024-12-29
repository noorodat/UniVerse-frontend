const CustomFormInput = ({ label = "", errors, register, name, type, containerStyles = "", labelStyles = "", ...rest }) => {
    return (
        <>
            <label className={labelStyles}>{label}</label>
            <input
                {...(register ? register(name) : {})}
                type={type}
                name={name}
                {...rest}
            />
            {errors && <p className="text-red mt-2">{errors.message}</p>}
        </>
    );
};

export default CustomFormInput;