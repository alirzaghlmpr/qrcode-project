import React from "react";
import { Monthes } from "@/constants";
import { lastNyears, daysOfMonth } from "@/utils";
const ReportsAdmin = () => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-6 flex-col justify-center">
        <form
          action=""
          className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
          <div>
            <select
              id="monthes"
              class="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
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
              class="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
              <option selected>انتخاب سال</option>
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
              class="bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50">
              <option selected>جست و جو بر اساس</option>
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
        <div className="text-sm flex p-3 md:gap-3 gap-2 flex-col w-[100%] h-[100%] bg-white border-1 rounded-lg">
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

export default ReportsAdmin;