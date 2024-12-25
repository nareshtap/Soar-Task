
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/Layout';

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Settings = React.lazy(() => import('./pages/settings/Settings'));
const Accounts = React.lazy(() => import('./pages/accounts/Accounts'));
const CreditCards = React.lazy(() => import('./pages/credit-cards/CreditCards'));
const Investments = React.lazy(() => import('./pages/investments/investments'));
const Loans = React.lazy(() => import('./pages/loans/Loans'));
const MyPrivilieges = React.lazy(() => import('./pages/my-privilieges/MyPrivilieges'));
const Transactions = React.lazy(() => import('./pages/Transactions/Transactions'));
const Services = React.lazy(() => import('./pages/services/Services'));


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
