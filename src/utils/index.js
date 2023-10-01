export const lastNyears = (currentYear, n) => {
  let endYear = currentYear - n;
  let years = [];
  for (let i = currentYear; i >= endYear; i--) years.push(i);
  return years;
};

export const daysOfMonth = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) days.push(i);

  return days;
};

export const getSearchParams = (searchParamsObject, enumObject) => {
  let params = [];
  for (const key in enumObject) {
    if (searchParamsObject.get(enumObject[key]))
      params.push(
        `${enumObject[key]}=${searchParamsObject.get(enumObject[key])}`
      );
  }

  return params;
};

export const createTableTdFromObject = (object, className) => {
  let datas = [];
  for (const key in object)
    datas.push(<td className={className && className}>{object[key]}</td>);
  return datas;
};
