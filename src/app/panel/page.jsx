"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import TableHistoryAdmin from "@/components/TableHistoryAdmin";
import { useWindowSize } from "@uidotdev/usehooks";
import { AdminNavbarItems } from "@/constants";
const Panel = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <TableHistoryAdmin />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <TableHistoryAdmin />
    </DesktopDasboard>
  );
};

export default Panel;
