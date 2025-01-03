import Image from "next/image"
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage"

export default function UserImage({ url, width = 50, height = 49 }) {
    return (
        <Image
            width={50}
            height={49}
            src={url || DEFAULT_USER_IMAGE}
            alt="user_image"
            quality={100}
            unoptimized
        />
    )
}
