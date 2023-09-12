"use client";

import React from "react";
import QRcodeLogin from "@/assets/qrcode-login.png";
import Image from "next/image";
import { LoginFormFields } from "@/utils";
import TextField from "@/components/TextField";

const page = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let username = formsElements.namedItem(LoginFormFields.Username).value;
    let password = formsElements.namedItem(LoginFormFields.Password).value;

    console.log(`username :${username} , password :${password}`);
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
          type="text"
          placeholder="نام کاربری"
          name={LoginFormFields.Username}
          id={`_${LoginFormFields.Username}`}
        />
        <TextField
          type="password"
          placeholder="رمز عبور"
          name={LoginFormFields.Password}
          id={`_${LoginFormFields.Password}`}
        />
        <button
          type="submit"
          className="bg-indigo-950 text-slate-50 rounded-lg p-2">
          ورود
        </button>
      </form>
    </div>
  );
};

export default page;
