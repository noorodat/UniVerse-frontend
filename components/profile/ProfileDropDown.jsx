import React from 'react'
import Image from 'next/image';
import studentMenuData from '@/data/studentMenuData';
import companyMenuData from '@/data/companyMenuData';
import { isActiveLink } from '@/utils/linkActiveChecker';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import logout from '@/server-actions/auth/logout';
import CustomServerActionButton from '../custom/buttons/CustomServerActionButton';
import CustomSpinnerLoadingButton from '../custom/loading/CustomSpinnerLoadingButton';
import { useUser } from '@/contexts/UserContext';

export default function ProfileDropDown() {

    const { name, image, userType } = useUser();
    const menuData = userType === 'company' ? companyMenuData : studentMenuData;

    return (
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
                    src={image}
                    width={50}
                    height={50}
                    unoptimized
                />
                <span className="name">{name}</span>
            </a>

            <ul className="dropdown-menu">
                {menuData.map((item) => (
                    <li
                        className={`${isActiveLink(
                            item.routePath,
                            usePathname()
                        ) ? "active" : ""} mb-1`}
                        key={item.id}
                    >
                        <Link href={item.routePath}>
                            <i className={`la ${item.icon}`}></i> {item.name}
                        </Link>
                    </li>
                ))}
                <li className='mb-1'>
                    <CustomServerActionButton
                        label={
                            <>
                                <i className='la la-sign-out'></i>
                                Logout
                            </>
                        }
                        pendingMessage={<CustomSpinnerLoadingButton />}
                        transitionFunction={logout}
                        className="theme-btn btn-style-three w-100"
                    />
                </li>
            </ul>
        </div>
    );
}
