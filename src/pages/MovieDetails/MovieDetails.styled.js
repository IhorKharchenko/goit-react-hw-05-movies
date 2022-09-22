import styled from '@emotion/styled';
import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';

export const StyledDetailsNav = styled(Box)`
  display: flex;
  padding: 16px;
  gap: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  text-align: center;
  padding: 8px;
  min-width: 75px;
  border: 1px solid #07c;
  border-radius: 8px;
  &.active {
    background-color: #07c;
    color: #fff;
  }
  &:hover:not(.active) {
    background-color: #07c;
    color: #fff;
  }
`;
export const StyledTitle = styled.h2`
  display: block;
  padding-bottom: 8px;
`;
export const StyledTagLine = styled.h3`
  display: block;
  padding-bottom: 8px;
`;
export const StyledText = styled.p`
  display: flex;
  gap: 16px;
  :not(:last-child) {
    padding-bottom: 8px;
  }
`;
export const StyledSubTitle = styled.b`
  display: block;
  padding-bottom: 8px;
`;
