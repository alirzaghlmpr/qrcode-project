"use client";

import React, { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const LeavageFormAdmin = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-6 flex-col items-center justify-center">
        <div className="grid grid-cols-1 w-full gap-4">
          <div className="bg-slate-50 flex flex-col gap-6 p-4 md:h-[auto] h-[350px] overflow-y-scroll costume-scroll">
            <p>درخواست های مرخصی </p>
            <hr />
            <ol className="list-decimal px-8">
              <li className="text-sm my-8">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>نام : </span>
                <span>علیرضا غلامپور</span>
                <span> ، </span>
                <span>کد پرسنلی : </span>
                <span>3981231076</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
              <li className="text-sm my-8">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>نام : </span>
                <span>علیرضا غلامپور</span>
                <span> ، </span>
                <span>کد پرسنلی : </span>
                <span>3981231076</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-amber-500 font-bold">در حال بررسی</span>
                <p className="flex gap-4 mt-2">
                  <button className="flex items-center gap-2 text-sm text-slate-50 bg-green-700 rounded-lg px-3 py-1">
                    <span>
                      <CheckIcon />
                    </span>
                    <span>تایید</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-50 bg-red-700 rounded-lg px-3 py-1">
                    <span>
                      <CloseIcon />
                    </span>
                    <span>رد</span>
                  </button>
                </p>
              </li>
              <li className="text-sm my-8">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>نام : </span>
                <span>علیرضا غلامپور</span>
                <span> ، </span>
                <span>کد پرسنلی : </span>
                <span>3981231076</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
              <li className="text-sm my-8">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>نام : </span>
                <span>علیرضا غلامپور</span>
                <span> ، </span>
                <span>کد پرسنلی : </span>
                <span>3981231076</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>
              <li className="text-sm my-8">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>نام : </span>
                <span>علیرضا غلامپور</span>
                <span> ، </span>
                <span>کد پرسنلی : </span>
                <span>3981231076</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavageFormAdmin;
