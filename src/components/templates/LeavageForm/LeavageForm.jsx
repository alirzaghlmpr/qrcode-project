"use client";

import React, { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import Button from "@/components/shared/Button";

const LeavageForm = () => {
  const [leavageDate, setLeavageDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-6 flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <div className="bg-slate-50 flex flex-col gap-6 p-4 h-[265px] md:h-[400px] overflow-y-scroll costume-scroll ">
            <p>فرم درخواست مرخصی</p>
            <hr />
            <form action="">
              <span>نوع مرخصی : </span>
              <div className="my-3 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <input
                    id="default-radio-1"
                    type="radio"
                    name="leavage-type"
                    className=""
                  />
                  <label for="default-radio-1" className="text-sm">
                    روزانه
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="leavage-type"
                    className=""
                  />
                  <label for="default-radio-2" className="text-sm">
                    ساعتی
                  </label>
                </div>
              </div>
              <span>از تاریخ : {leavageDate.format()} </span>
              <div className="my-4" style={{ direction: "rtl" }}>
                <Calendar
                  className="purple"
                  value={leavageDate}
                  onChange={setLeavageDate}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                />
              </div>
              <div className="flex gap-2">
                <span>به مدت</span>
                <input
                  style={{ width: "40px" }}
                  className="p-1"
                  type="number"
                  min="1"
                  defaultValue="1"
                />
                <span>روز/ساعت</span>
              </div>

              <Button extraClasses="w-[100%] mt-2" type="submit">
                ثبت درخواست
              </Button>
            </form>
          </div>
          <div className="bg-slate-50 flex flex-col gap-6 p-4 h-[165px] md:h-[400px] overflow-y-scroll costume-scroll">
            <p>درخواست های مرخصی شما</p>
            <hr />
            <ol className="list-decimal px-8">
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-amber-500 font-bold">در حال بررسی</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-lime-500 font-bold">تایید شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-amber-500 font-bold">در حال بررسی</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>{" "}
              <li className="text-sm my-2">
                <span>نوع مرخصی : </span>
                <span>ساعتی</span>
                <span> ، </span>
                <span>تاریخ : </span>
                <span>1402/10/12</span>
                <span> ، </span>
                <span>مدت : </span>
                <span>2 ساعت</span>
                <span> ، </span>
                <span>وضعیت : </span>
                <span className="text-red-700 font-bold">رد شده</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavageForm;
