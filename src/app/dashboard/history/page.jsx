"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import TableHistory from "@/components/templates/TableHistory";
import { useWindowSize } from "@uidotdev/usehooks";
import UserNavbarItems from "@/constants/UserNavbarItems";

const History = () => {
  const { width } = useWindowSize();

  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <TableHistory />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <TableHistory />
    </DesktopDasboard>
  );
};

export default History;
