"use client";

import React, { useState } from "react";
import Image from "next/image";
import useImageCropper from "@/hooks/useImageCropper";
import { useUser } from "@/contexts/UserContext";
import httpRequest from "@/utils/httpRequest";

const AvatarUpload = () => {
    const { openCropper, CropperComponent, isCropModalOpen, croppedImg } = useImageCropper();
    const { image, setImage } = useUser();
    const [uploading, setUploading] = useState(false);

    const handleCropAndUpload = async (croppedUrl) => {
        try {
            setUploading(true);

            // Convert the cropped image URL to a Blob
            const response = await fetch(croppedUrl);
            const blob = await response.blob();

            // Create FormData and append the image blob
            const formData = new FormData();
            formData.append("image", blob, "avatar.jpg"); // "avatar.jpg" is optional and can be any filename.

            // Send the FormData to the backend
            const data = await httpRequest(
                "auth/update_image/", // Endpoint (without base URL)
                "PUT",
                formData,
                true, // Include token
                true // Return response data
            );

            // Update the user's image with the new image URL
            const newImageUrl = data.image_url; // Ensure backend returns the updated image URL
            setImage(newImageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
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
