import './index.css';

import styled from '@emotion/styled';
import { ROUTE } from 'constants/routes';
import { ROUTE } from 'constants/routes';
import React, { useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import AppNavLink from './components/AppNavLink';
import HomeLayout from './layouts/HomeLayout';
import ConsentPage from './pages/consent/ConsentPage';
import RegisterPage from './pages/register/RegisterPage';
import { store } from './store';

const Header = styled.header`
  text-align: right;
  padding: 20px 40px 20px 40px;
`;

export default function App() {
  // const navigate = useNavigate();

  useEffect(() => {
    // navigate(ROUTE.HOME + '/' + ROUTE.CONSENT);
    // navigate(ROUTE.HOME);
  }, []);

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
        </Route>
        <Route path={ROUTE.CONSENTS} element={<div>hello</div>} />
      </Routes>
      <Outlet />
    </div>
  );
}
