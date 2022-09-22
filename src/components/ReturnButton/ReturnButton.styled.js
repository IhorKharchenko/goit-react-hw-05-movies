import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RtnBtnLink = styled(Link)`
  align-items: center;
  display: inline-flex;
  margin-top: 8px;
  /* margin: 0; */
  padding: 8px;
  gap: 8px;
  border: 1px solid #07c;
  border-radius: 8px;
  color: #1f2e40;
  &:hover,
  :focus {
    background-color: #07c;
    border-color: #05a;
    color: #fff;
  }
`;
