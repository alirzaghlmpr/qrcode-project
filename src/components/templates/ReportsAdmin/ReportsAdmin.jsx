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
import { DateObject } from "react-multi-date-picker";
import getReports from "@/apis/GetReports";

const ReportsAdmin = () => {
  const [values, setValues] = useState([new DateObject()]);
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPageStatus(PageStatus.Loading);

      let response = await getReports();
      let result = await response.json();
      console.log(result);
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData();
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);
  return (
    <>
      <form
        action=""
        className="flex flex-wrap justify-center md:justify-start gap-4">
        <div className="w-[35%] md:w-auto">
          <Select
            id="monthes"
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
      <div className="text-sm flex p-3 md:gap-3 gap-2 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
        <p>
          <span>ساعات حضور : </span>
          <span>100 ساعت</span>
        </p>
        <hr />
        <p>
          <span>دقایق تاخیر : </span>
          <span>50 دقیقه</span>
        </p>
        <hr />

        <p>
          <span>تعداد دفعات مرخصی ساعتی : </span>
          <span>2 دفعه</span>
        </p>
        <hr />

        <p>
          <span>مرخصی های ساعتی : </span>
          <span>2 ساعت</span>
        </p>
        <hr />

        <p>
          <span> مرخصی های روزانه : </span>
          <span>3 روز</span>
        </p>
        <hr />

        <p>
          <span>اضافه کاری : </span>
          <span>100 ساعت</span>
        </p>
      </div>
    </>
  );
};

export default ReportsAdmin;
