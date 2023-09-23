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
