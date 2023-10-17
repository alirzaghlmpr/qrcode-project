"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const AuthProvider = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfos = JSON.parse(localStorage.getItem("infos"));
      if (userInfos)
        if (new Date(userInfos?.expirationDate) < new Date())
          localStorage.setItem("infos", null);

      if (userInfos === null) {
        router.push("/");
      }
    }
  }, []);
  return <section>{children}</section>;
};

export default AuthProvider;
