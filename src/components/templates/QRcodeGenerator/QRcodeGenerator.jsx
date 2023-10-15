"use client";

import Button from "@/components/shared/Button";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const QRcodeGenerator = () => {
  return (
    <>
      <div className="flex items-center justify-center w-[60%] h-[60%] bg-white border-dotted border-2">
        {/* <Image
          src={QRcodeSample}
          alt="qrcode sample"
          width="100"
          className="w-[100%] h-[100%]"
        /> */}
        <p className="p-3 text-center">
          <span> برای ایجاد QRcode ، روی دکمه </span>
          <br />
          <span>
            <strong>ایجاد QRcode </strong>
          </span>
          <br />
          <span>کلیک کنید </span>
        </p>
      </div>
      <Button extraClasses="mt-4 w-[60%]">
        <p className="flex justify-between">
          <span>ایجاد QRcode برای ورود</span>
          <span>
            <LoginIcon />
          </span>
        </p>
      </Button>
      <Button className="bg-indigo-500 text-slate-50 rounded-lg p-2 mt-4 w-[60%]">
        <p className="flex justify-between">
          <span>ایجاد QRcode برای خروج</span>
          <span>
            <LogoutIcon />
          </span>
        </p>
      </Button>
    </>
  );
};

export default QRcodeGenerator;
