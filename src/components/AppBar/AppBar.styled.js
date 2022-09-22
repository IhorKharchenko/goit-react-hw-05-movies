import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid;
  border-color: transparent;
  border-radius: 8px;
  text-decoration: none;
  color: #1f2e40;
  &.active {
    background-color: #07c;
    color: #fff;
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    border-color: #07c;
    color: #07c;
  }
`;
