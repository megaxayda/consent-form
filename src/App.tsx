import './index.css';

import styled from '@emotion/styled';
import { ROUTE } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import AppNavLink from './components/AppNavLink';
import HomeLayout from './layouts/HomeLayout';
import RegisterPage from './pages/register/RegisterPage';

const Header = styled.header`
  text-align: right;
  padding: 20px 40px 20px 40px;
`;

const ConsentPage = lazy(() => import('./pages/consent/ConsentPage'));
const ConsentSuccessPage = lazy(
  () => import('./pages/consentSuccess/ConsentSuccessPage'),
);
const AllConsentsPage = lazy(() => import('./pages/allConsents/AllConsentsPage'));

export default function App() {
  return (
    <div>
      <Header>
        <AppNavLink to={ROUTE.HOME}>Home</AppNavLink>
        <AppNavLink to={ROUTE.CONSENTS}>Consents</AppNavLink>
      </Header>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={ROUTE.ROOT} element={<Navigate to={ROUTE.HOME} />}></Route>
          <Route path={ROUTE.HOME} element={<HomeLayout />}>
            <Route path={ROUTE.EMPTY} element={<RegisterPage />} />
            <Route path={ROUTE.CONSENT} element={<ConsentPage />} />
            <Route path={ROUTE.SUCCESS} element={<ConsentSuccessPage />} />
          </Route>
          <Route path={ROUTE.CONSENTS} element={<AllConsentsPage />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
}
