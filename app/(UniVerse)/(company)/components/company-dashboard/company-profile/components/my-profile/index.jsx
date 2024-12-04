import FormInfoBox from "./FormInfoBox";
import LogoCoverUploader from "./LogoCoverUploader";
import AvatarUpload from "@/app/(UniVerse)/(student)/components/student-dashboard/my-profile/components/my-profile/AvatarUpload";

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
