import dynamic from "next/dynamic";
import Link from "next/link";


const CustomSuccessPage = ({ title, description, path, goTo }) => {
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

                    <h1>{title} <span className="icon flaticon-success text-green"></span></h1>
                    <p>{description}</p>

                    <Link className="theme-btn btn-style-three call-modal" href={`${path}`}>
                        GO TO {goTo.toUpperCase()}
                    </Link>
                </div>
                {/* End .content */}
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(CustomSuccessPage), { ssr: true });
