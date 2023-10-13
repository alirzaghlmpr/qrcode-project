"use client";

import React from "react";
import { redirect } from "next/navigation";

import { useLocalStorage } from "@uidotdev/usehooks";

const AuthProvider = ({ children }) => {
  const [userInfos, setUserinfos] = useLocalStorage("infos", null);

  console.log(userInfos);

  if (userInfos === null) {
    redirect("/");
  }
  return <section>{children}</section>;
};

export default AuthProvider;
