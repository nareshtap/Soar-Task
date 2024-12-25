import Accounts from "../../assets/svg/Accounts";
import CreditCard from "../../assets/svg/CreditCard";
import Dashboard from "../../assets/svg/Dashboard";
import Investment from "../../assets/svg/Investments";
import Loans from "../../assets/svg/Loans";
import MyPriviliges from "../../assets/svg/MyPrivilieges";
import Services from "../../assets/svg/Services";
import Settings from "../../assets/svg/Settings";
import Transactions from "../../assets/svg/Transactions";

export const routes = [
  {
    link: "/",
    name: "Dashboard",
    Icon: Dashboard
    ,
  },
  {
    link: "/transactions", name: "Transactions", Icon: Transactions
  },
  {
    link: "/accounts", name: "Accounts",
    Icon: Accounts
  },
  {
    link: "/investments", name: "Investments", Icon: Investment,
  },
  {
    link: "/credit-cards", name: "Credit Cards", Icon: CreditCard,
  },
  {
    link: "/loans", name: "Loans", Icon: Loans
  },
  {
    link: "/services", name: "Services", Icon: Services,
  },
  {
    link: "/my-privilieges", name: "My Priviligies", Icon: MyPriviliges,
  },
  {
    link: "/settings", name: "Settings", Icon: Settings
  },
];

export const expenseStatisticsColors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A1',
  '#A133FF',
];
