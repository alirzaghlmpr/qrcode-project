import QrCodeIcon from "@mui/icons-material/QrCode";
import RestoreIcon from "@mui/icons-material/Restore";
import PollIcon from "@mui/icons-material/Poll";
import { grey } from "@mui/material/colors";
export const LoginFormFields = Object.freeze({
  Username: "username",
  Password: "password",
});

export const UserNavbarItems = [
  {
    id: 1,
    link: "ایجاد کیوار",
    to: "/dashboard",
    icon: <QrCodeIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 2,
    link: "تاریخچه",
    to: "/dashboard/history",
    icon: <RestoreIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 3,
    link: "گزارشات",
    to: "/dashboard/reports",
    icon: <PollIcon sx={{ color: grey[50] }} />,
  },
];

export const Monthes = [
  { name: "فروردین", value: "فروردین", id: "فروردین" },
  { name: "اردیبهشت", value: "اردیبهشت", id: "اردیبهشت" },
  { name: "خرداد", value: "خرداد", id: "خرداد" },
  { name: "تیر", value: "تیر", id: "تیر" },
  { name: "مرداد", value: "مرداد", id: "مرداد" },
  { name: "شهریور", value: "شهریور", id: "شهریور" },
  { name: "مهر", value: "مهر", id: "مهر" },
  { name: "آبان", value: "آبان", id: "آبان" },
  { name: "آذر", value: "آذر", id: "آذر" },
  { name: "دی", value: "دی", id: "دی" },
  { name: "بهمن", value: "بهمن", id: "بهمن" },
  { name: "اسفند", value: "اسفند", id: "اسفند" },
];

export const lastNyears = (currentYear, n) => {
  let endYear = currentYear - n;
  let years = [];
  for (let i = currentYear; i >= endYear; i--) years.push(i);
  return years;
};

export const MobileRoutes = Object.freeze({
  Dashboard: 1,
  History: 0,
  Reports: 2,
});
