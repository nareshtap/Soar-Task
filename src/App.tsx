
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

import Settings from './pages/settings/Settings';
import Accounts from './pages/accounts/Accounts';
import CreditCards from './pages/credit-cards/CreditCards';
import Investments from './pages/investments/investments';
import Loans from './pages/loans/Loans';
import MyPrivilieges from './pages/my-privilieges/MyPrivilieges';
import Transactions from './pages/Transactions/Transactions';
import Services from './pages/services/services';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="credit-cards" element={<CreditCards />} />
            <Route path="investments" element={<Investments />} />
            <Route path="loans" element={<Loans />} />
            <Route path="my-privilieges" element={<MyPrivilieges />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
