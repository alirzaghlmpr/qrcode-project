"use client";

import React, { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/colors/purple.css";
import Button from "@/components/shared/Button";
import createLeavage from "@/apis/CreateLeavage";
import LeavageStatus from "@/models/LeavageStatus";
import LeavageType from "@/models/LeavageType";
import PageStatus from "@/constants/PageStatus";
import Swal from "sweetalert2";
import getUserLeavages from "@/apis/GetUserLeavages";
const LeavageForm = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [leavages, setLeavages] = useState([]);

  const [leavageDate, setLeavageDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );

  useEffect(() => {
    const fetchData = async (username) => {
      setPageStatus(PageStatus.Loading);

      let response = await getUserLeavages(username);
      let result = await response.json();
      setLeavages(result.vacations.reverse());
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData(JSON.parse(localStorage.getItem("infos")).username);
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);

  const updateLeavages = async () => {
    try {
      setPageStatus(PageStatus.Loading);
      let response = await getUserLeavages(
        JSON.parse(localStorage.getItem("infos")).username
      );
      let result = await response.json();
      setLeavages(result.vacations.reverse());
      setPageStatus(PageStatus.Fetched);
    } catch (err) {
      console.log(err);
      setPageStatus(PageStatus.Error);
    }
  };

  const handleLeavageCreation = async (e) => {
    let personalID = JSON.parse(localStorage.getItem("infos")).personalID;
    try {
      setPageStatus(PageStatus.Loading);

      e.preventDefault();
      let formsElements = e.target.elements;
      let type = formsElements.namedItem("type")?.value;
      let duration = formsElements.namedItem("duration")?.value;

      if (type === "") throw new Error("نوع باید مشخص باشد");

      let convertedDate = new Date(
        leavageDate.convert(gregorian, gregorian_en).format()
      ).toISOString();

      let response = await createLeavage(personalID, {
        type: type,
        duration: duration,
        status: LeavageStatus.Pending,
        vacationDate: convertedDate,
      });

      let result = await response.json();
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "success",
        title: `درخواست مرخصی شما با موفقیت ثبت شد`,
        showConfirmButton: false,
        timer: 3000,
      });
      e.target.reset();
      setPageStatus(PageStatus.Fetched);
      await updateLeavages();
    } catch (err) {
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `(تمامی فیلد ها باید تکمیل شوند)ثبت درخواست با مشکل مواجه شد`,
        showConfirmButton: false,
        timer: 3000,
      });
      console.log(err);
      setPageStatus(PageStatus.Error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
      <div className="bg-slate-50 flex flex-col gap-6 p-4 h-[265px] md:h-[400px] overflow-y-scroll costume-scroll ">
        <p>فرم درخواست مرخصی</p>
        <hr />
        <form onSubmit={handleLeavageCreation} action="">
          <span>نوع مرخصی : </span>
          <div className="my-3 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input value={LeavageType.Daily} type="radio" name="type" />
              <label htmlFor="default-radio-1" className="text-sm">
                روزانه
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" value={LeavageType.Hourly} name="type" />
              <label htmlFor="default-radio-2" className="text-sm">
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
              name="duration"
            />
            <span>روز/ساعت</span>
          </div>

          <Button extraClasses="w-[100%] mt-2" type="submit">
            {pageStatus === PageStatus.Loading
              ? "درحال ثبت درخواست..."
              : "ثبت درخواست"}
          </Button>
        </form>
      </div>
      <div className="bg-slate-50 flex flex-col gap-6 p-4 h-[165px] md:h-[400px] overflow-y-scroll costume-scroll">
        <p>درخواست های مرخصی شما</p>
        <hr />

        <ol className="list-decimal px-8">
          {pageStatus === PageStatus.Loading ? (
            <p> درحال بارگذاری ... </p>
          ) : (
            leavages.map(({ _id, type, duration, status, vacationDate }) => {
              return (
                <li key={_id} className="text-sm my-2">
                  <span>نوع مرخصی : </span>
                  <span>{type === LeavageType.Daily ? "روزانه" : "ساعتی"}</span>
                  <span> ، </span>
                  <span>تاریخ : </span>
                  <span>
                    {new DateObject(vacationDate)
                      .convert(persian, persian_fa)
                      .format()}
                  </span>
                  <span> ، </span>
                  <span>مدت : </span>
                  <span>{`${duration} ${
                    type === LeavageType.Daily ? "روز" : "ساعت"
                  }`}</span>
                  <span> ، </span>
                  <span>وضعیت : </span>
                  <span
                    className={`font-bold ${
                      status === LeavageStatus.Accepted
                        ? "text-lime-500"
                        : status === LeavageStatus.Rejected
                        ? "text-red-700"
                        : "text-amber-500"
                    }`}>
                    {`${
                      status === LeavageStatus.Accepted
                        ? "تایید شده"
                        : status === LeavageStatus.Rejected
                        ? "رد شده"
                        : "در حال بررسی"
                    }`}
                  </span>
                </li>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
};

export default LeavageForm;
