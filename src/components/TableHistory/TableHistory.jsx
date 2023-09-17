"use client";

import React from "react";
import { Monthes, lastNyears } from "@/utils";
const TableHistory = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-5 flex-col items-start justify-start">
        <div
          style={{
            direction: "rtl",
            display: "flex",
          }}>
          <form action="" className="flex justify-start gap-5 items-center">
            <div>
              <select
                id="monthes"
                class="bg-indigo-950 text-sm px-3 py-2 rounded-lg text-slate-50">
                <option selected>انتخاب ماه</option>
                {Monthes.map(({ name, id, value }) => (
                  <option key={id} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                id="years"
                class="bg-indigo-950 text-sm px-3 py-2 rounded-lg text-slate-50">
                <option selected>انتخاب سال</option>
                {lastNyears(1402, 10).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="bg-indigo-950 text-sm px-3 py-2 rounded-lg text-slate-50">
                اعمال فیلتر
              </button>
            </div>
          </form>
        </div>
        <div
          className="flex gap-5 flex-col w-[100%] relative p-5 costume-scroll"
          style={{ direction: "ltr" }}>
          <table
            style={{ direction: "rtl" }}
            class="w-full text-center text-sm font-light border-2 border-indigo-950 rounded-lg">
            <thead class=" font-medium" style={{ background: "#1e1b4b" }}>
              <tr className="text-slate-50">
                <th scope="col" class="font-bold text-sm px-6 py-4">
                  ردیف
                </th>
                <th scope="col" class="font-bold text-sm px-6 py-4">
                  تاریخ
                </th>
                <th scope="col" class="font-bold text-sm px-6 py-4">
                  ساعت ورود
                </th>
                <th scope="col" class="font-bold text-sm px-6 py-4">
                  ساعت خروج
                </th>
                <th scope="col" class="font-bold text-sm px-6 py-4">
                  مدت حضور
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
                <td class="whitespace-nowrap px-6 py-4">06:00</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
                <td class="whitespace-nowrap px-6 py-4">03:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableHistory;
