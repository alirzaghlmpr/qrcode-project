"use client";

import React from "react";
import { redirect } from "next/navigation";

import { useLocalStorage } from "@uidotdev/usehooks";

const AuthProvider = ({ children }) => {
  const [userInfos, setUserinfos] = useLocalStorage("infos", null);
  if (userInfos)
    if (new Date(userInfos?.expirationDate) < new Date()) setUserinfos(null);

  if (userInfos === null) {
    redirect("/");
  }
  return <section>{children}</section>;
};

export default AuthProvider;