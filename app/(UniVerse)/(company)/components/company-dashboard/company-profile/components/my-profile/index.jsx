import FormInfoBox from "./FormInfoBox";
import AvatarUpload from "@/app/(UniVerse)/(student)/student-dashboard/components/my-profile/components/my-profile/AvatarUpload";

const index = () => {
    return (
        <div className="widget-content">
            <AvatarUpload />
            {/* End logo and cover photo components */}

            <FormInfoBox />
            {/* compnay info box */}
        </div>
    );
};

export default index;
