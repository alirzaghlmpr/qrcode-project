"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";

const AuthProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfos = JSON.parse(localStorage.getItem("infos"));
      if (userInfos)
        if (new Date(userInfos?.expirationDate) < new Date())
          localStorage.setItem("infos", null);

      if (userInfos === null) {
        redirect("/");
      }
    }
  }, []);
  return <section>{children}</section>;
};

export default AuthProvider;
