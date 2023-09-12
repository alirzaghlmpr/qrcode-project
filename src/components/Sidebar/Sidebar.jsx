import React from "react";

import { useScreenSize } from "@/hooks";
import SidebarMobile from "./SidebarMobile";
import SideBarDesktop from "./SidebarDesktop";

const Sidebar = () => {
  const { width } = useScreenSize();
  return <>{width < 768 ? <SidebarMobile /> : <SideBarDesktop />}</>;
};

export default Sidebar;
