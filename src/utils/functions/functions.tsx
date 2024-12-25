import { Location } from "react-router-dom";

export const getPageTitle = (location: Location<unknown>) => {
    switch (location.pathname) {
        case "/transactions":
            return "Transactions";
        case "/overview":
            return "Overview";
        case "/settings":
            return "Settings";
        case "/accounts":
            return "Accounts";
        case "/investments":
            return "Investments";
        case "/credit-cards":
            return "Credit Cards";
        case "/loans":
            return "Loans";
        case "/services":
            return "Services";
        case "/my-privilieges":
            return "My Privilieges";
        default:
            return "Dashboard";
    }
};
