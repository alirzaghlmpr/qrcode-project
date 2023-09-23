import React from "react";
import TextField from "../TextField";

const AddUserForm = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-6 flex-col justify-center">
        <div className="text-sm flex p-3 md:gap-3 gap-2 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
          <form action="" className="flex flex-col gap-6 w-[100%] md:w-[40%]">
            <input
              type="text"
              placeholder="نام"
              className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="سمت"
              className="border-2 border-indigo-950 focus:border-indigo-600 p-2 rounded-lg"
            />

            <label htmlFor="personelImg">عکس پرسنلی</label>
            <input id="personelImg" type="file" />
            <button
              type="submit"
              className="bg-indigo-950 text-slate-50 rounded-lg p-3">
              ثبت اطلاعات
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
