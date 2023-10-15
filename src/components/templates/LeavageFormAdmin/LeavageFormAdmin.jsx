"use client";

import React, { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@/components/shared/Button";
import getLeavages from "@/apis/GetLeavages";
import PageStatus from "@/constants/PageStatus";
import LeavageStatus from "@/models/LeavageStatus";
import LeavageType from "@/models/LeavageType";
import updateLeavage from "@/apis/PutLeavage";
const LeavageFormAdmin = () => {
  const [pageStatus, setPageStatus] = useState(PageStatus.Init);
  const [leavages, setLeavages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPageStatus(PageStatus.Loading);

      let response = await getLeavages();
      let result = await response.json();
      console.log(result);
      setLeavages(result.vacations.reverse());
      setPageStatus(PageStatus.Fetched);
    };

    try {
      fetchData();
    } catch (err) {
      setPageStatus(PageStatus.Error);
      console.log(err);
    }
  }, []);

  const updateLeavages = async () => {
    try {
      setPageStatus(PageStatus.Loading);
      let response = await getLeavages();
      let result = await response.json();
      setLeavages(result.vacations.reverse());
      setPageStatus(PageStatus.Fetched);
    } catch (err) {
      console.log(err);
      setPageStatus(PageStatus.Error);
    }
  };

  const updateUserLeavage = async (id, person, status) => {
    try {
      setPageStatus(PageStatus.Loading);

      let response = await updateLeavage(person._id, {
        id: id,
        status: status,
      });
      let result = await response.json();
      setPageStatus(PageStatus.Fetched);

      await updateLeavages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-1 w-full gap-4">
      <div className="bg-slate-50 flex flex-col gap-6 p-4 md:h-[auto] h-[350px]">
        <p>درخواست های مرخصی </p>
        <hr />
        <ol className="list-decimal px-8 overflow-y-scroll costume-scroll h-[250px]">
          {pageStatus === PageStatus.Loading ? (
            <p> درحال بارگذاری ... </p>
          ) : (
            leavages.map(
              ({ _id, type, duration, status, vacationDate, person }) => {
                return (
                  <li key={_id} className="text-sm my-2">
                    <span>نوع مرخصی : </span>
                    <span>
                      {type === LeavageType.Daily ? "روزانه" : "ساعتی"}
                    </span>
                    <span> ، </span>
                    <span>تاریخ : </span>
                    <span>
                      {new DateObject(vacationDate)
                        .convert(persian, persian_fa)
                        .format()}
                    </span>
                    <span> ، </span>
                    <span>مدت : </span>
                    <span>{`${duration} ${
                      type === LeavageType.Daily ? "روز" : "ساعت"
                    }`}</span>
                    <span> ، </span>
                    <span>درخواست کننده : </span>
                    <span>{`${person && person.fname} ${
                      person && person.lname
                    }`}</span>
                    <span> ، </span>
                    <span>وضعیت : </span>
                    <span
                      className={`font-bold ${
                        status === LeavageStatus.Accepted
                          ? "text-lime-500"
                          : status === LeavageStatus.Rejected
                          ? "text-red-700"
                          : "text-amber-500"
                      }`}>
                      {`${
                        status === LeavageStatus.Accepted
                          ? "تایید شده"
                          : status === LeavageStatus.Rejected
                          ? "رد شده"
                          : "در حال بررسی"
                      }`}
                      {status === LeavageStatus.Pending && (
                        <p className="flex gap-4 mt-2">
                          <Button
                            onClickCallback={() => {
                              updateUserLeavage(
                                _id,
                                person,
                                LeavageStatus.Accepted
                              );
                            }}
                            className="flex items-center gap-2 text-sm text-slate-50 bg-green-700 rounded-lg px-3 py-1">
                            <span>
                              <CheckIcon />
                            </span>
                            <span>تایید</span>
                          </Button>

                          <Button
                            onClickCallback={() =>
                              updateUserLeavage(
                                _id,
                                person,
                                LeavageStatus.Rejected
                              )
                            }
                            className="flex items-center gap-2 text-sm text-slate-50 bg-red-700 rounded-lg px-3 py-1">
                            <span>
                              <CloseIcon />
                            </span>
                            <span>رد</span>
                          </Button>
                        </p>
                      )}
                    </span>
                  </li>
                );
              }
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default LeavageFormAdmin;
