import { CompletedIcon, PaypalWhiteIcon, StopIcon, TotalOrderIcon } from "../assests/icons";

export const getBreadCrumbsPath = (currentRouter: string) => {
  switch (currentRouter) {
    case "/":
      return "Dashboard";
    case "/home":
      return "Dashboard";
    case "/settings":
      return "Settings";
    case "/logs":
      return "Logs";
    case "/sync-mode":
      return "Sync Mode";
    default:
      return "";
  }
};

export const ordersData = [
  { title: "Total Orders", ordersCount: "1,235", icon: <TotalOrderIcon /> },
  { title: "Paypal Orders", ordersCount: "1,200", icon: <PaypalWhiteIcon /> },
  { title: "Completed Paypal Orders", ordersCount: "1,235", icon: <CompletedIcon /> },
  { title: "Unfulfilled Orders", ordersCount: "1,235", icon: <StopIcon /> },
];

export const selectDateRangeData = [
  { name: "Today", value: "today" },
  { name: "Yesterday", value: "yesterday" },
  { name: "Last Week", value: "last-week" },
  { name: "Last 15 Days", value: "last-15-days" },
  { name: "Last 30 Days", value: "last-30-days" },
];
