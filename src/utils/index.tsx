import {
  CompletedIcon,
  CreditCardsIcon,
  DatePickerIcon,
  IdIcon,
  IntelligenceIcon,
  PaypalIcon,
  PaypalWhiteIcon,
  ShopifyIcon,
  StopIcon,
  TotalOrderIcon,
  TrueIcon,
  UserIcon,
} from "../assests/icons";

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
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last Week", value: "last-week" },
  { label: "Last 15 Days", value: "last-15-days" },
  { label: "Last 30 Days", value: "last-30-days" },
];

export const syncModeTypeData = [
  { label: "Automatic Intelligence", value: "automatic-intelligence", icon: <IntelligenceIcon /> },
  { label: "Date Range", value: "date-range", icon: <DatePickerIcon fillColor="fill-white" /> },
  { label: "Order ID", value: "order-id", icon: <IdIcon /> },
];

export const orderIdNumbers = [
  { label: "0123456789", value: "0123456789", icon: <TrueIcon /> },
  { label: "1234567890", value: "1234567890", icon: <TrueIcon /> },
  { label: "11223344556677889900", value: "11223344556677889900", icon: <TrueIcon /> },
];

export const settingsMenuListData = [
  { label: "Account Details", value: "account-details", icon: <UserIcon /> },
  { label: "Manage Plan", value: "manage-plan", icon: <CreditCardsIcon /> },
  { label: "Connect Paypal", value: "connect-paypal", icon: <PaypalIcon /> },
  { label: "Shopify Settings", value: "shopify-settings", icon: <ShopifyIcon /> },
];
