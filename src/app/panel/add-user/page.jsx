"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import { AdminNavbarItems } from "@/constants";
import AddUserForm from "@/components/templates/AddUserForm";
const AddUser = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <MobileDashboard navItems={AdminNavbarItems}>
      <AddUserForm />
    </MobileDashboard>
  ) : (
    <DesktopDasboard navItems={AdminNavbarItems}>
      <AddUserForm />
    </DesktopDasboard>
  );
};

export default AddUser;
