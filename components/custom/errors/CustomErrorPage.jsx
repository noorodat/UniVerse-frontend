import dynamic from "next/dynamic";
import Link from "next/link";


const CustomErrorPage = ({ title, description }) => {
    return (
        <>
            <div
                className="error-page-wrapper "
                style={{
                    backgroundImage: `url(/images/404.jpg)`,
                }}
                data-aos="fade"
            >
                <div className="content">
                    {/* End logo */}

                    <h1>{title}</h1>
                    <p>{description}</p>

                    <Link className="theme-btn btn-style-three call-modal" href="/">
                        BACK TO HOME
                    </Link>
                </div>
                {/* End .content */}
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(CustomErrorPage), { ssr: true });
