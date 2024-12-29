'use client'

import { useState } from "react";
import { addCVs } from "@/server-actions/cv/actions";
import { toast } from "react-toastify";
import CustomServerActionButton from "@/components/custom/buttons/CustomServerActionButton";
import { useAuth } from "@/contexts/AuthContext";
import CustomSpinnerLoadingButton from "@/components/custom/loading/CustomSpinnerLoadingButton";

// validation chaching
function checkFileTypes(files) {
    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            return false;
        }
    }
    return true;
}

const CvUploader = () => {
    const { userId } = useAuth();
    const [getManager, setManager] = useState([]);
    const [getError, setError] = useState("");

    const cvManagerHandler = (e) => {
        const data = Array.from(e.target.files);

        const isExist = getManager?.some((file1) =>
            data.some((file2) => file1.name === file2.name)
        );
        if (!isExist) {
            if (checkFileTypes(data)) {
                setManager(getManager.concat(data));
                setError("");
            } else {
                setError("Only accepts (.doc, .docx, .pdf) file");
            }
        } else {
            setError("File already exists");
        }
    };

    const saveCVs = async () => {
        const formData = new FormData();
        getManager.forEach((file) => {
            formData.append("files", file);
        });
        formData.append("student", userId);

        try {
            const res = await addCVs(formData);
            toast.success("CVs uploaded successfully.");
            setManager([]);
        } catch (error) {
            toast.error(error.message);
            console.error(error.message);
        }
    };

    // delete image
    const deleteHandler = (name) => {
        const deleted = getManager?.filter((file) => file.name !== name);
        setManager(deleted);
    };

    return (
        <>
            {/* Start Upload resule */}
            <div className="uploading-resume">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept=".doc,.docx,.xml,application/msword,application/pdf, image/*"
                        id="upload"
                        multiple
                        onChange={cvManagerHandler}
                    />
                    <label className="cv-uploadButton" htmlFor="upload">
                        <span className="title">Drop files here to upload</span>
                        <span className="text">
                            To upload file size is (Max 5Mb) and allowed file
                            types are (.doc, .docx, .pdf)
                        </span>
                        <span className="theme-btn btn-style-one">
                            Upload Resume
                        </span>
                        {getError !== "" ? (
                            <p className="ui-danger mb-0">{getError}</p>
                        ) : undefined}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
            </div>
            {/* End upload-resume */}

            {/* Start resume Preview  */}
            <div className="files-outer">
                {getManager?.map((file, i) => (
                    <div key={i} className="file-edit-box">
                        <span className="title">{file.name}</span>
                        <div className="edit-btns">
                            <button onClick={() => deleteHandler(file.name)}>
                                <span className="la la-trash"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {getManager && getManager.length > 0 ? (
                    <CustomServerActionButton
                        label="Save CV/s"
                        transitionFunction={saveCVs}
                        pendingMessage={<CustomSpinnerLoadingButton />}
                        className="theme-btn btn-style-one w-100"
                    />
                ) : null}
            </div>
            {/* End resume Preview  */}
        </>
    );
};

export default CvUploader;
