"use client";
import React, { useState, useEffect } from "react";
import Monthes from "@/constants/Monthes";
import lastNyears from "@/utils/lastNyears";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import getUserReports from "@/apis/GetUserReports";
import PageStatus from "@/constants/PageStatus";

const Reports = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async (personalID) => {
      setPageStatus(PageStatus.Loading);

      let response = await getUserReports(personalID);
      let result = await response.json();
      console.log(result);
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData(JSON.parse(localStorage.getItem("infos")).personalID);
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);

  return (
    <>
      <form action="" className="flex justify-start gap-5 items-center">
        <div>
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

        <div>
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

        <div>
          <Button
            className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50"
            type="submit">
            اعمال فیلتر
          </Button>
        </div>
      </form>
      <div className="flex p-3 gap-3 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
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

export default Reports;
