"use client";
import React, { useState, useEffect } from "react";
import Monthes from "@/constants/Monthes";
import lastNyears from "@/utils/lastNyears";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import getUserReports from "@/apis/GetUserReports";
import PageStatus from "@/constants/PageStatus";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { DateObject } from "react-multi-date-picker";
import Swal from "sweetalert2";
import removeZeros from "@/utils/removeZeros";
import getUserHistory from "@/apis/UserHistory";

const Reports = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [reports, setReports] = useState([]);
  const [histories, setHistories] = useState([]);
  const [totalHours, setTotalHours] = useState(0);

  const [values, setValues] = useState([new DateObject()]);

  useEffect(() => {
    const fetchData = async (username) => {
      setPageStatus(PageStatus.Loading);

      let response = await getUserReports(username);
      let result = await response.json();

      let response2 = await getUserHistory(username);
      let result2 = await response2.json();

      setReports(result);
      setHistories(result2.qrcodes);
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData(JSON.parse(localStorage.getItem("infos")).username);
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (histories.length > 0) {
      let sum = 0;
      histories.map((object) => {
        if (object?.exitDate) {
          sum += Math.abs(
            new Date(object.entranceDate) - new Date(object.exitDate)
          );
        }
      });

      setTotalHours(new Date(sum).toISOString().slice(11, 19));
    }
  }, [histories]);

  const handleReportFilter = async (e) => {
    e.preventDefault();
    let formsElements = e.target.elements;
    let year = formsElements.namedItem("year")?.value;
    let month = formsElements.namedItem("month")?.value;

    month = month === "انتخاب ماه" ? null : month;
    year = year === "انتخاب سال" ? null : year;

    if (!month && !year) {
      Swal.fire({
        toast: "false",
        position: "bottom-end",
        icon: "error",
        title: `فیلتر سال و ماه باید هردو دارای مقدار باشند`,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    let persianStartDate = `${year}/${month}/1`;
    let persianEndDate = `${year}/${month}/30`;

    try {
      setPageStatus(PageStatus.Loading);
      let response = await getUserReports(
        JSON.parse(localStorage.getItem("infos")).username,
        `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}`
      );
      let response2 = await getUserHistory(
        JSON.parse(localStorage.getItem("infos")).username,
        `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}`
      );

      let result = await response.json();
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

    if (values[0] && values[1]) {
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
        let response = await getUserReports(
          JSON.parse(localStorage.getItem("infos")).username,
          `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}`
        );
        let response2 = await getUserHistory(
          JSON.parse(localStorage.getItem("infos")).username,
          `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}`
        );
        let result = await response.json();
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
        title: `ابتدا و انتهای محدوده باید مشخص باشد`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleReportFilter}
        className="flex justify-start gap-5 items-center">
        <div>
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

        <div>
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

        <div>
          <Button
            className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50"
            type="submit">
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
        <div className="w-[100%] md:w-auto">
          <Button
            type="submit"
            className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 w-[100%]">
            اعمال فیلتر
          </Button>
        </div>
      </form>
      <div className="flex p-3 md:gap-5 gap-3 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
        {pageStatus === PageStatus.Loading ? (
          <p>درحال بارگذاری</p>
        ) : (
          <>
            <p>
              <span>ساعات حضور : </span>
              <span>{totalHours}</span>
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
        )}
      </div>
    </>
  );
};

export default Reports;
