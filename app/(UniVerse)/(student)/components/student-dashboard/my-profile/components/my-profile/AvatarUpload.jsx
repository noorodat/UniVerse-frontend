'use client';

import React from "react";
import Image from "next/image";
import useImageCropper from "@/hooks/useImageCropper";

const AvatarUpload = () => {
    const { openCropper, CropperComponent, croppedImg, isCropModalOpen } = useImageCropper();

    const logImgHandler = (e) => {
        const file = e.target.files[0];
        openCropper(file);
    };

    return (
        <>
            <div className="uploading-outer">
                <CropperComponent onCrop={(croppedUrl) => console.log("Uploaded to server: ", croppedUrl)} />
                {!isCropModalOpen && (
                    <div className="uploadButton">
                        <input
                            className="uploadButton-input"
                            type="file"
                            name="attachments[]"
                            accept="image/*"
                            id="upload"
                            required
                            onChange={logImgHandler}
                        />
                        <label
                            htmlFor="upload"
                            className="d-flex justify-content-center align-content-center flex-column"
                        >
                            <Image
                                alt="avatar"
                                className="rounded-circle"
                                src={croppedImg || "/images/resource/default-user.svg"}
                                width={150}
                                height={150}
                            />
                            <span
                                className="text-center la la-edit fs-3 cursor-pointer"
                                role="button"
                            ></span>
                        </label>
                    </div>
                )}
            </div>
        </>
    );
};

export default AvatarUpload;
