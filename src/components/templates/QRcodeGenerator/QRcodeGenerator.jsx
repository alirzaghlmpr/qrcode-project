"use client";

import Button from "@/components/shared/Button";
import React from "react";

const QRcodeGenerator = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-[60%] h-[60%] bg-white border-dotted border-2">
          {/* <Image
          src={QRcodeSample}
          alt="qrcode sample"
          width="100"
          className="w-[100%] h-[100%]"
        /> */}
          <p className="p-3 text-center">
            <span> برای ایجاد کیوار کد ، روی دکمه </span>
            <br />
            <span>
              <strong>ایجاد کیوار کد </strong>
            </span>
            <br />
            <span>کلیک کنید </span>
          </p>
        </div>
        <Button extraClasses="mt-4 w-[60%]">ایجاد کیوار</Button>
      </div>
    </div>
  );
};

export default QRcodeGenerator;
