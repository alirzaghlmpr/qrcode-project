"use client";

import Button from "@/components/shared/Button";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import createQRcode from "@/apis/CreateQRcode";
import Image from "next/image";
import PageStatus from "@/constants/PageStatus";
import Swal from "sweetalert2";

const QRcodeGenerator = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);

  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  const handleEntranceQrcode = async () => {
    let personalID = JSON.parse(localStorage.getItem("infos")).personalID;
    try {
      setPageStatus(PageStatus.Loading);
      let response = await createQRcode(personalID, {
        isEntrance: true,
      });
      let data = await response.json();
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "success",
        title: `کد ورود با موفقیت ایجاد شد`,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(data);
      setPageStatus(PageStatus.Fetched);
      setQrCodeUrl(data.qrCodeUrl);
    } catch (error) {
      console.log(error);
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `مشکلی در ایجاد کد بوجود آمده`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const handleExitQrcode = async () => {
    let personalID = JSON.parse(localStorage.getItem("infos")).personalID;
    try {
      setPageStatus(PageStatus.Loading);
      let response = await createQRcode(personalID, {
        isEntrance: false,
      });
      let data = await response.json();
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "success",
        title: `کد خروج با موفقیت ایجاد شد`,
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(data);
      setPageStatus(PageStatus.Fetched);
      setQrCodeUrl(data.qrCodeUrl);
    } catch (error) {
      console.log(error);
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `مشکلی در ایجاد کد بوجود آمده`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-[60%] h-[60%] bg-white border-dotted border-2">
        {qrCodeUrl && pageStatus === PageStatus.Loading ? (
          <p>درحال ایجاد</p>
        ) : pageStatus === PageStatus.Fetched ? (
          <Image
            src={qrCodeUrl}
            alt="qrcode sample"
            width="100"
            height="100"
            className="w-[90%] h-[80%] md:w-[30%]"
          />
        ) : (
          <p className="p-3 text-center">
            <span> برای ایجاد QRcode ، روی دکمه </span>
            <br />
            <span>
              <strong>ایجاد QRcode </strong>
            </span>
            <br />
            <span>کلیک کنید </span>
          </p>
        )}
      </div>
      <p>{pageStatus === PageStatus.Loading ? "درحال ایجاد..." : ""}</p>
      <Button
        disabled={pageStatus === PageStatus.Loading}
        extraClasses="mt-4 w-[60%]"
        onClickCallback={handleEntranceQrcode}>
        <p className="flex justify-between">
          <span>ایجاد QRcode برای ورود</span>
          <span>
            <LoginIcon />
          </span>
        </p>
      </Button>
      <Button
        disabled={pageStatus === PageStatus.Loading}
        onClickCallback={handleExitQrcode}
        className="bg-indigo-500 text-slate-50 rounded-lg p-2 mt-4 w-[60%]">
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
