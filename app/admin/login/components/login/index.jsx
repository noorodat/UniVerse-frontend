import Header from "@/components/auth/Header";
import AdminLoginForm from "@/app/admin/login/components/AdminLoginForm";

const index = () => {
    return (
        <>
            <Header showJobPostBtn={false} clickable={false} />

            <div className="login-section">
                <div
                    className="image-layer"
                    style={{ backgroundImage: "url(/images/background/12.jpg)" }}
                ></div>
                <div className="outer-box">
                    {/* <!-- Login Form --> */}
                    <div className="login-form default-form">
                        <AdminLoginForm />
                    </div>
                    {/* <!--End Login Form --> */}
                </div>
            </div>
            {/* <!-- End Info Section --> */}
        </>
    );
};

export default index;
