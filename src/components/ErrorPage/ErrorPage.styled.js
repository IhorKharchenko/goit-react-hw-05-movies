import styled from '@emotion/styled';
import { Box } from 'components/Box';
import imagePath from '../../images/pageNotFound.jpg';
export const ErrorBox = styled(Box)`
  /* text-align: center; */
  height: 100vh;
  background: url(${imagePath});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
