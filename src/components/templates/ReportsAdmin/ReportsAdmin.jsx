"use client";
import React, { useState, useEffect } from "react";
import Monthes from "@/constants/Monthes";
import lastNyears from "@/utils/lastNyears";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import TextField from "@/components/shared/TextField";
import PageStatus from "@/constants/PageStatus";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";

import { DateObject } from "react-multi-date-picker";
import getReports from "@/apis/GetReports";
import Swal from "sweetalert2";
import removeZeros from "@/utils/removeZeros";
import getHistory from "@/apis/GetHistory";

const ReportsAdmin = () => {
  const [values, setValues] = useState([new DateObject()]);
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [reports, setReports] = useState(null);
  const [histories, setHistories] = useState([]);
  const [totalHours, setTotalHours] = useState(0);
  const [totalLatency, setTotalLantency] = useState(0);

  useEffect(() => {
    if (histories.length > 0) {
      let entranceDates = new Date(object.entranceDate);

      latencies +=
        entranceDates.getHours() * 3600 +
        entranceDates.getMinutes() * 60 +
        entranceDates.getSeconds();

      let sum = 0;
      histories.map((object) => {
        if (object?.exitDate) {
          sum += Math.abs(
            new Date(object.entranceDate) - new Date(object.exitDate)
          );
        }
      });

      // vorode saat 8 , 8*3600
      let diff = latencies - 8 * 3600; //diff + => takhir darim , diff manfi => takhir nadarim
      console.log(diff);
      if (diff > 0) {
        setTotalLantency(
          [
            parseInt(diff / 60 / 60),
            parseInt((diff / 60) % 60),
            parseInt(diff % 60),
          ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1")
        );
      } else {
        setTotalLantency(0);
      }

      setTotalHours(new Date(sum).toISOString().slice(11, 19));
    }
  }, [histories]);

  const handleReportFilter = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let year = formsElements.namedItem("year")?.value;
    let month = formsElements.namedItem("month")?.value;
    let query = formsElements.namedItem("searchQuery")?.value;

    month = month === "انتخاب ماه" ? null : month;
    year = year === "انتخاب سال" ? null : year;
    query = query === "" ? null : query;

    if (!month && !year) {
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `فیلتر سال و ماه و کدپرسنلی باید هرسه دارای مقدار باشند`,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    let persianStartDate = `${year}/${month}/1`;
    let persianEndDate = `${year}/${month}/30`;

    try {
      setPageStatus(PageStatus.Loading);
      let response = await getReports(
        `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}${
          query ? `&username=${query}` : ""
        }`
      );
      let result = await response.json();
      let response2 = await getHistory(
        `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}${
          query ? `&username=${query}` : ""
        }`
      );
      let result2 = await response2.json();
      setReports(result);
      setHistories(result2.qrcodes);
      setPageStatus(PageStatus.Fetched);
    } catch (err) {
      console.log(err);
      setPageStatus(PageStatus.Error);
    }
  };

  const handleReportFilterRange = async (e) => {
    e.preventDefault();
    let query = e.target.elements.namedItem("searchQuery")?.value;
    query = query === "" ? null : query;

    if (values[0] && values[1] && query) {
      let persianStartDate = values[0]
        .convert(persian, persian_en)
        .format()
        .toString();
      persianStartDate = removeZeros(persianStartDate);
      let persianEndDate = values[1]
        .convert(persian, persian_en)
        .format()
        .toString();
      persianEndDate = removeZeros(persianEndDate);

      try {
        setPageStatus(PageStatus.Loading);
        let response = await getReports(
          `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}${
            query ? `&username=${query}` : ""
          }`
        );
        let result = await response.json();
        let response2 = await getHistory(
          `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}${
            query ? `&username=${query}` : ""
          }`
        );
        let result2 = await response2.json();

        setReports(result);
        setHistories(result2.qrcodes);
        setPageStatus(PageStatus.Fetched);
      } catch (err) {
        console.log(err);
        setPageStatus(PageStatus.Error);
      }
    } else {
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `ابتدا و انتهای محدوده و کدپرسنلی باید مشخص باشد`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleReportFilter}
        className="flex flex-wrap justify-center md:justify-start gap-4">
        <div className="w-[35%] md:w-auto">
          <Select
            name="month"
            defaultValue="انتخاب ماه"
            options={Monthes.map(({ name, id, value }) => (
              <option key={id} value={value}>
                {name}
              </option>
            ))}
          />
        </div>

        <div className="w-[35%] md:w-auto">
          <Select
            name="year"
            defaultValue="انتخاب سال"
            options={lastNyears(1402, 10).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          />
        </div>

        <div className="w-[100%] md:w-auto">
          <TextField
            name="searchQuery"
            id="search-query"
            placeholder="جست و جو کد پرسنلی..."
            className="w-[100%] text-xs px-3 py-3 rounded-lg border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900"
          />
        </div>

        <div className="w-[100%] md:w-auto">
          <Button
            type="submit"
            className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 w-[100%]">
            اعمال فیلتر
          </Button>
        </div>
      </form>
      <form
        onSubmit={handleReportFilterRange}
        className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
        <div style={{ direction: "rtl" }}>
          <p>انتخاب محدوده:</p>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            value={values}
            onChange={setValues}
            range
          />
        </div>
        <div>
          <TextField
            name="searchQuery"
            placeholder="جست و جوی کد پرسنلی"
            className="text-xs px-3 py-3 rounded-lg border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900"
          />
        </div>
        <div className="w-[100%] md:w-auto">
          <Button
            type="submit"
            className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 w-[100%]">
            اعمال فیلتر
          </Button>
        </div>
      </form>
      <div className="text-sm flex p-3 md:gap-5 gap-3 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
        {pageStatus === PageStatus.Loading ? (
          <p>درحال بارگذاری</p>
        ) : reports && histories.length > 0 ? (
          <>
            <p>
              <span>ساعات حضور : </span>
              <span>{totalHours}</span>
            </p>

            <hr />
            <p>
              <span>ساعات تاخیر: </span>
              <span>{totalLatency}</span>
            </p>
            <hr />
            <p>
              <span>مرخصی های ساعتی : </span>
              <span>{reports.amountOfHourlyVacations}</span>
            </p>
            <hr />

            <p>
              <span> مرخصی های روزانه : </span>
              <span>{reports.amountOfDailyVacations}</span>
            </p>
            <hr />
          </>
        ) : (
          <p>
            فیلتری انتخاب کنید<br></br>داده ای یافت نشد
          </p>
        )}
      </div>
    </>
  );
};

export default ReportsAdmin;
