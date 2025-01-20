'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import adminMenuData from "@/data/adminMenuData";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import DEFAULT_USER_IMAGE from "@/constants/images/defaultUserImage";
import CustomServerActionButton from "@/components/custom/buttons/CustomServerActionButton";
import CustomSpinnerLoadingButton from "@/components/custom/loading/CustomSpinnerLoadingButton";
import { logout } from "@/server-actions/admin/auth/actions";

const DashboardHeader = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-shaddow  ${navbar ? "fixed-header " : ""
                }`}
        >
            <div className="container-fluid">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src="/images/logo.svg"
                                        width={154}
                                        height={50}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    <div className="outer-box">
                        <button className="menu-btn">
                            <span className="count">1</span>
                            <span className="icon la la-heart-o"></span>
                        </button>
                        {/* wishlisted menu */}

                        <button className="menu-btn">
                            <span className="icon la la-bell"></span>
                        </button>
                        {/* End notification-icon */}

                        {/* <!-- Dashboard Option --> */}
                        <div className="dropdown dashboard-option">
                            <a
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Image
                                    alt="avatar"
                                    className="thumb"
                                    src={DEFAULT_USER_IMAGE}
                                    unoptimized
                                    width={50}
                                    height={50}
                                />
                                <span className="name">Admin</span>
                            </a>

                            <ul className="dropdown-menu">
                                {adminMenuData.map((item) => (
                                    <li
                                        className={`${isActiveLink(
                                            item.routePath,
                                            usePathname()
                                        )
                                            ? "active"
                                            : ""
                                            } mb-1`}
                                        key={item.id}
                                    >
                                        <Link href={item.routePath}>
                                            <i
                                                className={`la ${item.icon}`}
                                            ></i>{" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <CustomServerActionButton
                                        label={"Logout"}
                                        transitionFunction={logout}
                                        pendingMessage={<CustomSpinnerLoadingButton />}
                                        className="theme-btn btn-style-two w-100 mt-3"
                                    />
                                </li>
                            </ul>
                        </div>
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
