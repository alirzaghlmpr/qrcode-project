"use client";

import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Swal from "sweetalert2";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const Scanner = () => {
  const [state, setState] = useState([]);
  let modalDelayTimeMiliSec = 2000;
  let scannerContainerId = "scanner";
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(scannerContainerId, {
      qrbox: {
        width: 400,
        height: 400,
      },
      fps: 5,
      disableFlip: true,
    });

    const success = (decodedText, decodedResult) => {
      //   console.log(
      //     `decoded text :${decodedText} , decoded result : ${decodedResult}`
      //   );
      const data = JSON.parse(decodedText);

      const date = new DateObject({ calendar: persian, locale: persian_fa });
      console.log(date.format());
      console.log(`${date.hour}:${date.minute}:${date.second}`);

      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.name} , ${data.role} , ${data.pID}`,
        text: `${date.hour}:${date.minute}:${date.second} , ${date.format()}`,
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

      setState((prev) => [...prev, info]);

      setTimeout(() => {
        scanner.resume();
      }, modalDelayTimeMiliSec + 1000);
      scanner.pause();
    };
    const error = (error) => {
      console.log(error);
    };

    scanner.render(success, error);
  }, []);

  return (
    <div className="flex items-start p-3">
      <div className="w-[50%] flex flex-col items-start px-4">
        <p>لیست افراد اسکن شده</p>
        <ol class="list-decimal">
          {state.map((item) => (
            <li key={item.pID}>
              {item.name},{item.role},{item.pID},{item.date},{item.hour}:
              {item.minute}:{item.sec}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center gap-4">
        <h4>جهت اسکن کیوار کد ، کیوار خود را داخل کادر داخل قرار دهید</h4>
        <div className="w-[100%]" id={scannerContainerId}></div>
      </div>
    </div>
  );
};

export default Scanner;
