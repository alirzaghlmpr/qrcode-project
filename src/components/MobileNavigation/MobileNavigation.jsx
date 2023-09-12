"use client";
import React, { useState, useEffect, useRef } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeIcon from "@mui/icons-material/QrCode";
import RestoreIcon from "@mui/icons-material/Restore";
import PollIcon from "@mui/icons-material/Poll";
import Paper from "@mui/material/Paper";
import Avatar from "@/assets/userAvatar.webp";
import Image from "next/image";
import QRcodeSample from "@/assets/qrcode-sample.webp";

const MobileNavigation = () => {
  const [value, setValue] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Paper
      ref={ref}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}>
      <BottomNavigation
        sx={{ backgroundColor: "#1e1b4b" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          sx={{ color: "#a78bfa" }}
          label="تاریخچه"
          icon={
            <RestoreIcon sx={{ color: value === 0 ? "white" : "#a78bfa" }} />
          }
        />
        <BottomNavigationAction
          sx={{ color: "#a78bfa" }}
          label="ایجاد کیوار"
          icon={
            <QrCodeIcon sx={{ color: value === 1 ? "white" : "#a78bfa" }} />
          }
        />
        <BottomNavigationAction
          sx={{ color: "#a78bfa" }}
          label="گزارشات"
          icon={<PollIcon sx={{ color: value === 2 ? "white" : "#a78bfa" }} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNavigation;
