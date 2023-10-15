"use client";
import React, { useState, useEffect } from "react";
import Monthes from "@/constants/Monthes";
import daysOfMonth from "@/utils/daysOfMonth";
import lastNyears from "@/utils/lastNyears";
import TableHistoryHeadersAdmin from "@/constants/TableHistoryHeadersAdmin";
import AdminHistoryTableFakeData from "@/mocks/AdminHistoryTableFakeData";
import Table from "@/components/shared/Table";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import TextField from "@/components/shared/TextField";
import PageStatus from "@/constants/PageStatus";
import getHistory from "@/apis/GetHistory";
const TableHistoryAdmin = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPageStatus(PageStatus.Loading);

      let response = await getHistory();
      let result = await response.json();
      setHistories(result.qrcodes);
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
          <div>
            <TextField
              name="searchQuery"
              id="search-query"
              placeholder="جست و جو..."
              className="text-xs px-3 py-3 rounded-lg border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900"
            />
          </div>
          <div>
            <Select
              id="query-type"
              defaultValue="جست و جو بر اساس"
              options={[
                <option key={"نام"} value="name">
                  نام
                </option>,
                <option key={"کد پرسنلی"} value="pCode">
                  کد پرسنلی
                </option>,
              ]}
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
          <Table
            isAdmin={true}
            header={TableHistoryHeadersAdmin}
            datas={histories}
          />
        )}
      </div>
    </>
  );
};

export default TableHistoryAdmin;
