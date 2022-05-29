import './index.css';

import styled from '@emotion/styled';
import { ROUTE } from 'constants/routes';
import AllConsentsPage from 'pages/allConsents/AllConsentsPage';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import AppNavLink from './components/AppNavLink';
import HomeLayout from './layouts/HomeLayout';
import ConsentPage from './pages/consent/ConsentPage';
import ConsentSuccessPage from './pages/consentSuccess/ConsentSuccessPage';
import RegisterPage from './pages/register/RegisterPage';

const Header = styled.header`
  text-align: right;
  padding: 20px 40px 20px 40px;
`;

export default function App() {
  return (
    <div>
      <Header>
        <AppNavLink to={ROUTE.HOME}>Home</AppNavLink>
        <AppNavLink to={ROUTE.CONSENTS}>Consents</AppNavLink>
      </Header>
      <Routes>
        <Route path={ROUTE.ROOT} element={<Navigate to={ROUTE.HOME} />}></Route>
        <Route path={ROUTE.HOME} element={<HomeLayout />}>
          <Route path={ROUTE.EMPTY} element={<RegisterPage />} />
          <Route path={ROUTE.CONSENT} element={<ConsentPage />} />
          <Route path={ROUTE.SUCCESS} element={<ConsentSuccessPage />} />
        </Route>
        <Route path={ROUTE.CONSENTS} element={<AllConsentsPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}
