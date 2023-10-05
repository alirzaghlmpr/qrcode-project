"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import AddUserForm from "@/components/templates/AddUserForm";
import DashboardContent from "@/components/layouts/DashboardContent";

const AddUser = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <AddUserForm />
      </DashboardContent>
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <DashboardContent>
        <AddUserForm />
      </DashboardContent>
    </DesktopDasboard>
  );
};

export default AddUser;
