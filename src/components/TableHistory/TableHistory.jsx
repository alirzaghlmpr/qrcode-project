import React from "react";
import { purple } from "@mui/material/colors";

const TableHistory = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg flex p-5 flex-col items-center justify-center">
        <div
          className="w-[100%] md:w-[90%] relative p-5 costume-scroll"
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
              </tr>
            </thead>
            <tbody>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">1402/12/12</td>
                <td class="whitespace-nowrap px-6 py-4">08:01</td>
                <td class="whitespace-nowrap px-6 py-4">14:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td class="whitespace-nowrap px-6 py-4">1402/08/12</td>
                <td class="whitespace-nowrap px-6 py-4">10:11</td>
                <td class="whitespace-nowrap px-6 py-4">13:59</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>{" "}
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>{" "}
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>{" "}
              <tr class="border-b transition duration-300 ease-in-out">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>{" "}
              <tr class="border-b transition duration-300 ease-in-out bg-indigo-200">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td class="whitespace-nowrap px-6 py-4">1402/01/12</td>
                <td class="whitespace-nowrap px-6 py-4">09:01</td>
                <td class="whitespace-nowrap px-6 py-4">15:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableHistory;
