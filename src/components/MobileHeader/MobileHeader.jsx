import React from "react";
import Image from "next/image";
import Avatar from "@/assets/userAvatar.webp";
const MobileHeader = () => {
  return (
    <div
      className="flex p-3 gap-10 items-center"
      style={{ backgroundColor: "#1e1b4b" }}>
      <div>
        <Image width="50" src={Avatar} alt="user profile" />
      </div>
      <p className="text-slate-50 text-xs">علیرضا غلامپور</p>
      <p className="text-slate-50 text-xs">3981231076</p>
      <p className="text-slate-50 text-xs">کارمند</p>
    </div>
  );
};

export default MobileHeader;
