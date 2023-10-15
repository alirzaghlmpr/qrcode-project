"use client";

import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Swal from "sweetalert2";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Scanner = () => {
  const [scannedInfo, setScannedInfo] = useState([]);
  let modalDelayTimeMiliSec = 2000;
  let scannerContainerId = "scanner";
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(scannerContainerId, {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 5,
      disableFlip: true,
    });

    const success = async(decodedText, decodedResult) => {
      const data = JSON.parse(decodedText);

      const date = new DateObject({ calendar: persian, locale: persian_fa });
      console.log(date.format());
      console.log(`${date.hour}:${date.minute}:${date.second}`);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        // title: `${data.name} , ${data.role} , ${data.pID}`,
        // text: `${date.hour}:${date.minute}:${date.second} , ${date.format()}`,
        showConfirmButton: false,
        timer: modalDelayTimeMiliSec,
      });
      const info = {
        ...data,
        date: date.format(),
        hour: date.hour,
        minute: date.minute,
        sec: date.second,
      };

      setScannedInfo((prev) => [...prev, info]);

      setTimeout(() => {
        scanner.resume();
      }, modalDelayTimeMiliSec);
      scanner.pause();
    };
    const error = (error) => {
      console.log(error);
    };

    scanner.render(success, error);
  }, []);

  return (
    <div className="flex justify-evenly items-start p-5">
      <div className="w-[48%] h-[600px] overflow-y-scroll flex flex-col items-start px-10 costume-scroll">
        <p>لیست افراد اسکن شده({scannedInfo.length} نفر):</p>
        <ol className="list-decimal">
          {/* {scannedInfo.map((item) => (
            <li className="my-3" key={item.pID}>
              <span> نام : </span>
              <span>{item.name}</span>
              <span> ، </span>
              <span> سمت : </span>
              <span>{item.role}</span>
              <span> ، </span>
              <span>کد پرسنلی:</span>
              <span>{item.pID}</span>
              <span> ، </span>
              <span>تاریخ:</span>
              <span>{item.date}</span>
              <span> ، </span>
              <span>زمان:</span>
              <span>
                {item.hour}:{item.minute}:{item.sec}
              </span>
            </li>
          ))} */}
        </ol>
      </div>
      <div className="w-[48%] flex flex-col items-center justify-center gap-4">
        <h4>جهت اسکن کیوار کد ، کیوار خود را داخل کادر داخل قرار دهید</h4>
        <div className="w-[100%]" id={scannerContainerId}></div>
      </div>
    </div>
  );
};

export default Scanner;
