import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <StyledH1>Consent Form</StyledH1>
      <Outlet />
    </div>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  color: #444444;
`;
