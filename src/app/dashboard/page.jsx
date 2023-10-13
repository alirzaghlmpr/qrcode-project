"use client";

import React, { useEffect } from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import QRcodeGenerator from "@/components/templates/QRcodeGenerator";
import { useWindowSize } from "@uidotdev/usehooks";
import UserNavbarItems from "@/constants/UserNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import getPeopleInfos from "@/apis/GetPeopleInfos";
import getUserInfo from "@/apis/GetUserInfo";
import createQRcode from "@/apis/CreateQRcode";

const Dashboard = () => {
  const { width } = useWindowSize();
  useEffect(() => {
    const fetchData = async () =>
      await createQRcode("6528fc941908667bec5019cc");

    try {
      let r = fetchData();
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return width < 768 ? (
    <MobileDashboard navItems={UserNavbarItems}>
      <DashboardContent>
        <QRcodeGenerator />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={UserNavbarItems}>
      <DashboardContent>
        <QRcodeGenerator />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default Dashboard;
