"use client"
import { useState, useRef } from "react";
import AvatarEditor from "react-avatar-editor";

const useImageCropper = () => {
    const [isCropModalOpen, setCropModalOpen] = useState(false);
    const [originalImg, setOriginalImg] = useState(null);
    const [croppedImg, setCroppedImg] = useState(null);
    const editorRef = useRef(null);

    const openCropper = (file) => {
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setOriginalImg(objectUrl);
            setCropModalOpen(true);
        }
    };

    const closeCropper = () => {
        setCropModalOpen(false);
        if (originalImg) {
            URL.revokeObjectURL(originalImg);
            setOriginalImg(null);
        }
    };

    const cropImage = (onCrop) => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas();
            canvas.toBlob((blob) => {
                if (blob) {
                    const croppedUrl = URL.createObjectURL(blob);
                    setCroppedImg(croppedUrl);
                    onCrop(croppedUrl);
                    closeCropper();
                }
            }, "image/jpeg");
        }
    };

    const CropperComponent = ({
        width = 150,
        height = 150,
        border = 0,
        borderRadius = 75,
        scale = 1.5,
        onCrop,
    }) =>
        isCropModalOpen && (
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <AvatarEditor
                    ref={editorRef}
                    image={originalImg}
                    width={width}
                    height={height}
                    border={border}
                    borderRadius={borderRadius}
                    scale={scale}
                    rotate={0}
                />
                <div className="d-flex justify-content-between gap-2">
                    <button
                        className="theme-btn btn-style-three call-modal small"
                        onClick={closeCropper}
                    >
                        Cancel
                    </button>
                    <button
                        className="theme-btn btn-style-one call-modal small"
                        onClick={() => cropImage(onCrop)}
                    >
                        Save
                    </button>
                </div>
            </div>
        );

    return {
        openCropper,
        closeCropper,
        croppedImg,
        CropperComponent,
        isCropModalOpen
    };
};

export default useImageCropper;