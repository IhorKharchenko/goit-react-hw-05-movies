import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: inline-flex;
  justify-content: start;
  gap: 10px;
  flex-wrap: wrap;
`;
export const StyledListItem = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: calc((100% - 90px) / 10);
  border: 1px solid #07c;
  border-radius: 8px;
`;
export const StyledImg = styled.img`
  font-size: 15px;
  max-width: 100%;
`;
export const StyledCastName = styled.p`
  padding: 4px;
  font-weight: 500;
`;
