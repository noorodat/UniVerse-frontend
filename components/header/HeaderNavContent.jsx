// components/header/HeaderNavContent.jsx
"use client";

import Link from "next/link";
import {
  blogLink,
  candidateLink,
  employerLink,
  findJobLink,
  homeLink,
} from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const HeaderNavContent = () => {
  const currentPath = usePathname();

  const { userType } = useAuth();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li className={isActiveLink(homeLink.routePath, currentPath) ? "current" : ""}>
            <Link href={homeLink.routePath}>{homeLink.name}</Link>
          </li>
          {/* End homepage menu items */}

          {userType == "student" && (
            <li className={isActiveLink(findJobLink.routePath, currentPath) ? "current" : ""}>
              <Link href={findJobLink.routePath}>{findJobLink.name}</Link>
            </li>
          )}
          {/* End findjobs menu items */}

          <li className={isActiveLink(employerLink.routePath, currentPath) ? "current" : ""}>
            <Link href={employerLink.routePath}>{employerLink.name}</Link>
          </li>
          {/* End Employers menu items */}

          <li className={isActiveLink(candidateLink.routePath, currentPath) ? "current" : ""}>
            <Link href={candidateLink.routePath}>{candidateLink.name}</Link>
          </li>
          {/* End Candidates menu items */}

          {/* <li className={isActiveLink(blogLink.routePath, currentPath) ? "current" : ""}>
            <Link href={blogLink.routePath}>{blogLink.name}</Link>
          </li> */}
          {/* End Blog menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
