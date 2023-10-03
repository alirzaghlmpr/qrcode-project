"use client";
import React from "react";
import Monthes from "@/constants/Monthes";
import lastNyears from "@/utils/lastNyears";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";

const Reports = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-5 flex-col items-center justify-center">
        <form action="" className="flex justify-start gap-5 items-center">
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
            <Button
              className="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50"
              type="submit">
              اعمال فیلتر
            </Button>
          </div>
        </form>
        <div className="flex p-3 gap-3 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
          <p>
            <span>ساعات حضور : </span>
            <span>100 ساعت</span>
          </p>
          <hr />
          <p>
            <span>دقایق تاخیر : </span>
            <span>50 دقیقه</span>
          </p>
          <hr />

          <p>
            <span>تعداد دفعات مرخصی ساعتی : </span>
            <span>2 دفعه</span>
          </p>
          <hr />

          <p>
            <span>مرخصی های ساعتی : </span>
            <span>2 ساعت</span>
          </p>
          <hr />

          <p>
            <span> مرخصی های روزانه : </span>
            <span>3 روز</span>
          </p>
          <hr />

          <p>
            <span>اضافه کاری : </span>
            <span>100 ساعت</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
