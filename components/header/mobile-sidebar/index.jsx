// components/mobileSidebar/Index.jsx
"use client";

import {
  Sidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { isActiveLink } from "../../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Index = () => {
  const currentPath = usePathname();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}
      <Sidebar>
        <Menu>
          {mobileMenuData?.map((item) => (
            <MenuItem
              key={item.id}
              className={
                isActiveLink(item.routePath, currentPath) ? "current" : ""
              }
              label={item.label}
              component={<Link href={item.routePath}></Link>}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>

      <SidebarFooter />
    </div>
  );
};

export default Index;
