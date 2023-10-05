import React from "react";
import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import AddUserFormFields from "@/models/AddUserFormFields";

const AddUserForm = () => {
  return (
    <div className="text-sm flex p-3 md:gap-3 gap-2 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
      <form action="" className="flex flex-col gap-6 w-[100%] md:w-[40%]">
        <TextField
          name={AddUserFormFields.Name.title}
          id={`_${AddUserFormFields.Name.title}`}
          placeholder={AddUserFormFields.Name.placeholder}
          className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
        />
        <TextField
          name={AddUserFormFields.Role.title}
          id={`_${AddUserFormFields.Role.title}`}
          placeholder={AddUserFormFields.Role.placeholder}
          className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
        />

        <label htmlFor="personelImg">عکس پرسنلی</label>
        <input
          name={AddUserFormFields.Image.title}
          id={`_${AddUserFormFields.Image.title}`}
          type="file"
        />
        <Button type="submit">ثبت اطلاعات</Button>
      </form>
    </div>
  );
};

export default AddUserForm;
