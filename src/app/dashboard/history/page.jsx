"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import TableHistory from "@/components/TableHistory";
import { useWindowSize } from "@uidotdev/usehooks";

const History = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard>
      <TableHistory />
    </MobileDashboard>
  ) : (
    <DesktopDasboard>
      <TableHistory />
    </DesktopDasboard>
  );
};

export default History;
