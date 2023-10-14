"use client";

import React, { useState, useEffect } from "react";
import QRcodeLogin from "@/assets/qrcode-login.png";
import Image from "next/image";
import LoginFormFields from "@/models/LoginFormFields";
import TextField from "@/components/shared/TextField";
import Button from "@/components/shared/Button";
import signIn from "@/apis/Login";
import { PageStatus } from "@/constants/PageStatus";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let userInfos = localStorage.getItem("infos");
      // console.log("userinfos: " + userInfos);

      if (userInfos !== null) {
        userInfos.role === "person"
          ? redirect("/dashboard")
          : userInfos.role === "admin"
          ? redirect("/panel")
          : redirect("/scanner");
      }
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let username = formsElements.namedItem(
      LoginFormFields?.Username?.title
    )?.value;
    let password = formsElements.namedItem(
      LoginFormFields?.Password?.title
    )?.value;

    try {
      setPageStatus(PageStatus.Loading);

      let response = await signIn({ username: username, password: password });
      let info = await response.json();

      console.log(info);

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "infos",
          JSON.stringify({
            fname: info.person[0].fname,
            lname: info.person[0].lname,
            role: info.person[0].role,
            username: info.person[0].username,
            personalID: info.person[0]._id,
            expirationDate: info.expirationDate,
          })
        );
      }
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "success",
        title: `وارد شدید`,
        showConfirmButton: false,
        timer: 3000,
      });
      setPageStatus(PageStatus.Fetched);

      info.person[0].role === "person"
        ? redirect("/dashboard")
        : info.person[0].role === "admin"
        ? redirect("/panel")
        : redirect("/scanner");
    } catch (error) {
      console.log(error);
      setPageStatus(PageStatus.Error);
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `نام کاربری یا رمز عبور نامعتبر`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
  return (
    <div className="flex p-2 flex-col w-100 h-[100vh] bg-slate-200 items-center justify-center gap-10">
      <Image alt="qrcode image for login" src={QRcodeLogin} width="175" />
      <p className="text-indigo-950 font-bold text-3xl">
        ورود به سامانه حضور غیاب
      </p>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-10 w-[80%] md:w-[30%]">
        <TextField
          placeholder={LoginFormFields?.Username?.placeholder}
          name={LoginFormFields?.Username?.title}
          id={`_${LoginFormFields?.Username?.title}`}
        />
        <TextField
          type="password"
          placeholder={LoginFormFields?.Password?.placeholder}
          name={LoginFormFields?.Password?.title}
          id={`_${LoginFormFields?.Password?.title}`}
        />
        <Button disabled={pageStatus === PageStatus.Loading} type="submit">
          {pageStatus === PageStatus.Loading ? "درحال ورود..." : "ورود"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
