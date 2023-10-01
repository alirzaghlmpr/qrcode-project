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
    if (searchParamsObject.get(enumObject[key])) {
      let template = `${enumObject[key]}=${searchParamsObject.get(
        enumObject[key]
      )}`;
      params.push(template);
    }
  }

  return params;
};
