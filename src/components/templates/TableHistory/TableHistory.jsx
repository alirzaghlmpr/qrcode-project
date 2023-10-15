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

const TableHistory = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [histories, setHistories] = useState([]);

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
  return (
    <>
      <div
        style={{
          direction: "rtl",
          display: "flex",
        }}>
        <form
          action=""
          className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
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
              id="days"
              defaultValue="انتخاب روز"
              options={daysOfMonth().map((item) => (
                <option key={item} value={item}>
                  {item}
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
        ) : (
          <Table header={TableHistoryHeadersUser} datas={histories} />
        )}
      </div>
    </>
  );
};

export default TableHistory;
