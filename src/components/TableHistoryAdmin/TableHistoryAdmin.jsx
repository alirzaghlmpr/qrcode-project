import React from "react";
import { Monthes } from "@/constants";
import { lastNyears, daysOfMonth } from "@/utils";
import { TableHistoryHeadersAdmin } from "@/constants";
import { AdminHistoryTableFakeData } from "@/mocks";
import Table from "../shared/Table";

const TableHistoryAdmin = () => {
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
              <select
                id="monthes"
                className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
                <option defaultValue={null}>انتخاب ماه</option>
                {Monthes.map(({ name, id, value }) => (
                  <option key={id} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                id="monthes"
                className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
                <option defaultValue={null}>انتخاب روز</option>
                {daysOfMonth().map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                id="years"
                className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
                <option defaultValue={null}>انتخاب سال</option>
                {lastNyears(1402, 10).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="جست و جو..."
                className="text-xs px-3 py-3 rounded-lg border-transparent border-2 focus:border-indigo-900 focus:border-2 text-indigo-900"
              />
            </div>
            <div>
              <select
                id="years"
                className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
                <option defaultValue={null}>جست و جو بر اساس</option>
                <option value="name">نام</option>
                <option value="pCode">کد پرسنلی</option>
              </select>
            </div>

            <div className="w-[100%] md:w-auto">
              <button
                type="submit"
                className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 w-[100%]">
                اعمال فیلتر
              </button>
            </div>
          </form>
        </div>
        <div
          className="flex gap-5 flex-col w-[100%] relative p-5 costume-scroll"
          style={{ direction: "rtl" }}>
          <Table
            header={TableHistoryHeadersAdmin}
            datas={AdminHistoryTableFakeData}
          />
        </div>
      </div>
    </div>
  );
};

export default TableHistoryAdmin;
