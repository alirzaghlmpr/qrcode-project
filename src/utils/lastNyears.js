export const lastNyears = (currentYear, n) => {
  let endYear = currentYear - n;
  let years = [];
  for (let i = currentYear; i >= endYear; i--) years.push(i);
  return years;
};

export default lastNyears;
