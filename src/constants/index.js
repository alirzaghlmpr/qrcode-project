import QrCodeIcon from "@mui/icons-material/QrCode";
import RestoreIcon from "@mui/icons-material/Restore";
import PollIcon from "@mui/icons-material/Poll";
import HailIcon from "@mui/icons-material/Hail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
  {
    id: 4,
    link: "مرخصی",
    to: "/dashboard/leavage",
    icon: <HailIcon sx={{ color: grey[50] }} />,
  },
];

export const AdminNavbarItems = [
  {
    id: 1,
    link: "تاریخجه",
    to: "/panel",
    icon: <RestoreIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 2,
    link: "گزارشات",
    to: "/panel/reports",
    icon: <PollIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 3,
    link: "افزودن کاربر",
    to: "/panel/add-user",
    icon: <PersonAddIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 4,
    link: "مرخصی ها",
    to: "/panel/leavage",
    icon: <HailIcon sx={{ color: grey[50] }} />,
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

export const SearchParams = Object.freeze({
  Month: "month",
  Day: "day",
  Year: "year",
  Type: "type",
  Query: "query",
});

export const TableHistoryHeadersUser = [
  { id: "ردیف", title: "ردیف" },
  { id: "تاریخ", title: "تاریخ" },
  { id: "اولین ورود", title: "اولین ورود" },
  { id: "آخرین خروج", title: "آخرین خروج" },
  { id: "مدت حضور", title: "مدت حضور" },
];

export const TableHistoryHeadersAdmin = [
  { id: "ردیف", title: "ردیف" },
  { id: "تاریخ", title: "تاریخ" },
  { id: "نام", title: "نام" },
  { id: "کد پرسنلی", title: "کد پرسنلی" },
  { id: "اولین ورود", title: "اولین ورود" },
  { id: "آخرین خروج", title: "آخرین خروج" },
  { id: "مدت حضور", title: "مدت حضور" },
];
