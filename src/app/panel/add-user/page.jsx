"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import AdminNavbarItems from "@/constants/AdminNavbarItems";
import AddUserForm from "@/components/templates/AddUserForm";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const AddUser = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <AddUserForm />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={AdminNavbarItems}>
        <DashboardContent>
          <AddUserForm />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default AddUser;
