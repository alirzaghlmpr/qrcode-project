"use client";
import React, { useState } from "react";
import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import AddUserFormFields from "@/models/AddUserFormFields";
import insertUser from "@/apis/InsertUser";
import Swal from "sweetalert2";
import PageStatus from "@/constants/PageStatus";

const AddUserForm = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let fname = formsElements.namedItem(AddUserFormFields?.Name?.title)?.value;
    let lname = formsElements.namedItem(AddUserFormFields?.Lname?.title)?.value;
    let password = formsElements.namedItem(
      AddUserFormFields?.Password?.title
    )?.value;

    try {
      setPageStatus(PageStatus.Loading);
      let response = await insertUser({
        fname: fname,
        lname: lname,
        role: "person",
        password: password,
      });
      e.target.reset();
      let data = await response.json();
      Swal.fire({
        title: "با موفقیت ساخته شد!",
        icon: "success",
        html: "کد پرسنلی : " + `${data.person.username}`,
        confirmButtonText: "بستن",
      });
      console.log(data);
      setPageStatus(PageStatus.Fetched);
    } catch (error) {
      console.log(error);
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `اطلاعات تکراری یا فیلد خالی`,
        showConfirmButton: false,
        timer: 3000,
      });
      setPageStatus(PageStatus.Error);
    }
  };

  return (
    <div className="text-sm flex p-3 md:gap-3 gap-2 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col gap-6 w-[100%] md:w-[40%]">
        <TextField
          name={AddUserFormFields?.Name?.title}
          id={`_${AddUserFormFields?.Name?.title}`}
          placeholder={AddUserFormFields?.Name?.placeholder}
          className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
        />{" "}
        <TextField
          name={AddUserFormFields?.Lname?.title}
          id={`_${AddUserFormFields?.Lname?.title}`}
          placeholder={AddUserFormFields?.Lname?.placeholder}
          className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
        />
        <TextField
          name={AddUserFormFields?.Password?.title}
          id={`_${AddUserFormFields?.Password?.title}`}
          placeholder={AddUserFormFields?.Password?.placeholder}
          className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
        />
        <Button disabled={pageStatus === PageStatus.Loading} type="submit">
          {pageStatus === PageStatus.Loading
            ? "درحال ثبت اطلاعات..."
            : "ثبت اطلاعات"}
        </Button>
      </form>
    </div>
  );
};

export default AddUserForm;
