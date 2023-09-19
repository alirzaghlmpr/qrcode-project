"use client";

import React from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import LeavageForm from "@/components/LeavageForm";
const Leavage = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard>
      <LeavageForm />
    </MobileDashboard>
  ) : (
    <DesktopDasboard>
      <LeavageForm />
    </DesktopDasboard>
  );
};

export default Leavage;
