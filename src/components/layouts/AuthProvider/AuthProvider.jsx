"use client";

import React from "react";
import { redirect } from "next/navigation";

const AuthProvider = ({ children }) => {
  const userInfos = localStorage.getItem("infos");
  if (userInfos)
    if (new Date(userInfos?.expirationDate) < new Date())
      localStorage.setItem("infos", null);

  if (userInfos === null) {
    redirect("/");
  }
  return <section>{children}</section>;
};

export default AuthProvider;
