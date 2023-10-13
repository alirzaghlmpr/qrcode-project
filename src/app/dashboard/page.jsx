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
import qrcodeValidation from "@/apis/QRcodeValidation";
import getUserHistory from "@/apis/UserHistory";

const Dashboard = () => {
  const { width } = useWindowSize();
  //      await createQRcode("6528fc941908667bec5019cc");
  /*
  
        await qrcodeValidation({
        qrCodeData: JSON.parse(
          `{"personId":"6528fc941908667bec5019cc","creationDate":"2023-10-13T10:17:46.444Z","expirationDate":"2023-10-13T10:27:46.444Z"}`
        ),
      });
  
  */
  // useEffect(() => {
  //   const fetchData = async () =>
  //     await getUserHistory("6528fc941908667bec5019cc");
  //   try {
  //     let r = fetchData();
  //     console.log(r);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

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
