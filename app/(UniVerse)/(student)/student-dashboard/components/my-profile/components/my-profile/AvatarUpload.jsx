"use client";

import React, { useState } from "react";
import Image from "next/image";
import useImageCropper from "@/hooks/useImageCropper";
import { useUser } from "@/contexts/UserContext";
import updateImage from "@/server-actions/profile/updateImage";
import { toast } from "react-toastify";

const AvatarUpload = () => {
    const { openCropper, CropperComponent, isCropModalOpen, croppedImg } = useImageCropper();
    const { image } = useUser();
    const [uploading, setUploading] = useState(false);

    const handleCropAndUpload = async (croppedUrl) => {
        try {
            setUploading(true);
            const response = await fetch(croppedUrl);
            const blob = await response.blob();
            const formData = new FormData();
            formData.append("image", blob, "avatar.jpg");
            await updateImage(formData);
            toast.success("Profile image updated.");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUploading(false);
        }
    };

    const imageUrl = croppedImg || image || "/images/avatars/default-avatar.jpg";

    return (
        <div className="uploading-outer">
            <CropperComponent onCrop={handleCropAndUpload} />
            {!isCropModalOpen && (
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={(e) => openCropper(e.target.files[0])}
                        disabled={uploading}
                    />
                    <label
                        htmlFor="upload"
                        className="d-flex justify-content-center align-content-center flex-column"
                    >
                        <Image
                            alt="avatar"
                            className="rounded-circle"
                            src={imageUrl}
                            unoptimized
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
            {uploading && <p>Uploading...</p>}
        </div>
    );
};

export default AvatarUpload;
