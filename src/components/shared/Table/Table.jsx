import React from "react";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const Table = ({ header, datas, isAdmin }) => {
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
            <td>
              {new DateObject(data?.entranceDate)
                .convert(persian, persian_fa)
                .format()}
            </td>
            {isAdmin && (
              <>
                <td>{data?.person?.fname + " " + data?.person?.lname}</td>
                <td>{data?.person?.username}</td>
              </>
            )}
            <td>{`${new DateObject(data?.entranceDate)
              .convert(persian, persian_fa)
              .hour.toString()
              .padStart(2, "0")}:${new DateObject(data?.entranceDate)
              .convert(persian, persian_fa)
              .minute.toString()
              .padStart(2, "0")}`}</td>
            <td>{`${new DateObject(data?.exitDate)
              .convert(persian, persian_fa)
              .hour.toString()
              .padStart(2, "0")}:${new DateObject(data?.exitDate)
              .convert(persian, persian_fa)
              .minute.toString()
              .padStart(2, "0")}`}</td>
            <td>
              {data?.exitDate &&
                new Date(
                  Math.abs(
                    new Date(data?.entranceDate).getTime() -
                      new Date(data?.exitDate).getTime()
                  )
                )
                  .toISOString()
                  .slice(11, 19)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
