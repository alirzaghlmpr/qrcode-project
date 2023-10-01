import React from "react";
import { createTableTdFromObject } from "@/utils";

const Table = ({ header, datas }) => {
  return (
    <table
      style={{ direction: "rtl" }}
      className="w-full text-center text-sm font-light border-2 border-indigo-950 rounded-lg">
      <thead className=" font-medium" style={{ background: "#1e1b4b" }}>
        <tr className="text-slate-50">
          {header.map(({ id, title }) => (
            <th key={id} scope="col" className="font-bold text-sm px-6 py-4">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data, i) => (
          <tr
            key={i}
            className={`border-b transition duration-300 ease-in-out ${
              i % 2 === 0 ? "bg-indigo-200" : ""
            }`}>
            <td className="whitespace-nowrap px-6 py-4 font-medium">{i}</td>
            {createTableTdFromObject(data, "whitespace-nowrap px-6 py-4")}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
