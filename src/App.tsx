import styled from '@emotion/styled';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppNavLink from './components/AppNavLink';
import RegisterPage from './pages/register/RegisterPage';

const Header = styled.header`
  text-align: right;
  padding: 20px 40px 20px 40px;
`;

function App() {
  return (
    <div>
      <Header>
        <AppNavLink to="/">Home</AppNavLink>
        <AppNavLink to="consents">Consents</AppNavLink>
      </Header>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="/consents" element={<div>hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
