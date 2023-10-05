"use client";

import React from "react";
import QRcodeLogin from "@/assets/qrcode-login.png";
import Image from "next/image";
import LoginFormFields from "@/models/LoginFormFields";
import TextField from "@/components/shared/TextField";
import Button from "@/components/shared/Button";

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
          placeholder={LoginFormFields.Username.placeholder}
          name={LoginFormFields.Username.title}
          id={`_${LoginFormFields.Username.title}`}
        />
        <TextField
          type="password"
          placeholder={LoginFormFields.Password.placeholder}
          name={LoginFormFields.Password.title}
          id={`_${LoginFormFields.Password.title}`}
        />
        <Button type="submit">ورود</Button>
      </form>
    </div>
  );
};

export default page;
