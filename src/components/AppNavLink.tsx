import styled from '@emotion/styled';
import React, { ReactChild } from 'react';
import { NavLink } from 'react-router-dom';

type NabLinkWithActiveStyleProps = {
  to: string;
  children?: ReactChild;
};

const activeStyle = {
  fontWeight: 600,
  opacity: 1,
};

export default function AppNavLink({ to, children }: NabLinkWithActiveStyleProps) {
  return (
    <StyledNavLink style={({ isActive }) => (isActive ? activeStyle : {})} to={to}>
      {children}
    </StyledNavLink>
  );
}

const StyledNavLink = styled(NavLink)`
  margin: 20px;
  color: inherit;
  text-decoration: none;
  opacity: 0.5;
`;
