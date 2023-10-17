"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@/assets/userAvatar.webp";
import { useEffect, useState } from "react";
const MobileHeader = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const { fname, lname, username } = JSON.parse(
      localStorage.getItem("infos")
    );
    setData({ fname: fname, lname: lname, username: username });
  }, []);

  return (
    <div className="flex p-3 gap-10 items-center bg-indigo-950">
      <p className="text-slate-50 text-xs">{`${data && data?.fname} ${
        data && data?.lname
      }`}</p>
      <p className="text-slate-50 text-xs">{data && data?.username}</p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          localStorage.setItem("infos", null);
          router.push("/");
        }}
        className="mx-2 mt-1 text-sm font-medium text-slate-300">
        خروج
      </p>
    </div>
  );
};

export default MobileHeader;
