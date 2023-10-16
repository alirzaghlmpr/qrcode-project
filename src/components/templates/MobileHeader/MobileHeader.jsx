import React from "react";
import Image from "next/image";
import Avatar from "@/assets/userAvatar.webp";
const MobileHeader = () => {
  const { fname, lname, username } = JSON.parse(localStorage.getItem("infos"));

  return (
    <div className="flex p-3 gap-10 items-center bg-indigo-950">
      <div>
        <Image width="50" src={Avatar} alt="user profile" />
      </div>
      <p className="text-slate-50 text-xs">{`${fname} ${lname}`}</p>
      <p className="text-slate-50 text-xs">{username}</p>
    </div>
  );
};

export default MobileHeader;
