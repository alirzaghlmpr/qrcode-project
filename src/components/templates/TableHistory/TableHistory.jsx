"use client";
import React, { useState, useEffect } from "react";
import Monthes from "@/constants/Monthes";
import lastNyears from "@/utils/lastNyears";
import daysOfMonth from "@/utils/daysOfMonth";
import TableHistoryHeadersUser from "@/constants/TableHistoryHeadersUser";
import Table from "@/components/shared/Table";
import UserHistoryTableFakeData from "@/mocks/UserHistoryTableFakeData";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import getUserHistory from "@/apis/UserHistory";
import PageStatus from "@/constants/PageStatus";
import Swal from "sweetalert2";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

const TableHistory = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [histories, setHistories] = useState([]);
  const [values, setValues] = useState([new DateObject()]);

  useEffect(() => {
    const fetchData = async (personalID) => {
      setPageStatus(PageStatus.Loading);

      let response = await getUserHistory(personalID);
      let result = await response.json();
      setHistories(result.qrcodes);
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData(JSON.parse(localStorage.getItem("infos")).personalID);
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);
  const handleHistoryFilter = async (e) => {
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
      let response = await getUserHistory(
        JSON.parse(localStorage.getItem("infos")).personalID,
        `persianStartDate=${persianStartDate}&persianEndDate=${persianEndDate}`
      );
      let result = await response.json();
      setHistories(result.qrcodes);
      setPageStatus(PageStatus.Fetched);
    } catch (err) {
      console.log(err);
      setPageStatus(PageStatus.Error);
    }
  };
  return (
    <>
      <div
        style={{
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        <form
          onSubmit={handleHistoryFilter}
          action=""
          className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
          <div>
            <Select
              name="month"
              id="monthes"
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
              id="years"
              defaultValue="انتخاب سال"
              options={lastNyears(1402, 10).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
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
          action=""
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
      </div>
      <div
        className="flex gap-5 flex-col w-[100%] relative p-5 costume-scroll"
        style={{ direction: "rtl" }}>
        {pageStatus === PageStatus.Loading ? (
          <p>درحال بارگذاری...</p>
        ) : histories.length > 0 ? (
          <Table header={TableHistoryHeadersUser} datas={histories} />
        ) : (
          <p>رکوردی یافت نشد</p>
        )}
      </div>
    </>
  );
};

export default TableHistory;
