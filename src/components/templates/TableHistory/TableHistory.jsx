"use client";
import React from "react";
import { Monthes, SearchParams } from "@/constants";
import { lastNyears, daysOfMonth, getSearchParams } from "@/utils";
import { useSearchParams } from "next/navigation";
import { TableHistoryHeadersUser } from "@/constants";
import Table from "@/components/shared/Table";
import { UserHistoryTableFakeData } from "@/mocks";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";

const TableHistory = () => {
  const searchParams = useSearchParams();

  const params = getSearchParams(searchParams, SearchParams);
  console.log(params);

  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-5 flex-col items-start justify-start">
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
          <Table
            header={TableHistoryHeadersUser}
            datas={UserHistoryTableFakeData}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHistory;
