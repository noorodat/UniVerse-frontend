import React, { useState } from "react";

const CustomFileInput = ({ label, register, name, errors }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : "");
    };

    return (
        <div className="uploading-outer">
            <div className="uploadButton">
                <input
                    name={name}
                    className="uploadButton-input"
                    type="file"
                    accept="image/*, application/pdf"
                    id={name}
                    {...register(name, {
                        onChange: handleFileChange,
                    })}
                />
                <label className="uploadButton-button ripple-effect" htmlFor={name}>
                    {label}
                </label>
            </div>
            {fileName && (
                <div className="uploadButton-file-name p-2">
                    <p>{fileName}</p>
                </div>
            )}
            {errors && <p className="text-red mt-2">{errors.message}</p>}

        </div>
    );
};

export default CustomFileInput;
