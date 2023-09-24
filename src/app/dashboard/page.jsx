"use client";

import React, { useEffect } from "react";
import DesktopDasboard from "@/components/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/Dashboard/MobileDashboard";
import QRcodeGenerator from "@/components/QRcodeGenerator";
import { useWindowSize } from "@uidotdev/usehooks";
import { UserNavbarItems } from "@/constants";
const Dashboard = () => {
  const { width } = useWindowSize();
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://qrcode-auth-system.onrender.com/api/v1/admin/createQRcode/64f10b25fec5e426ebdd4d73"
      );

      return response.ok ? response.json() : new Error("failed to fetch data");
    };

    try {
      let r = fetchData();
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <QRcodeGenerator />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <QRcodeGenerator />
    </DesktopDasboard>
  );
};

export default Dashboard;
