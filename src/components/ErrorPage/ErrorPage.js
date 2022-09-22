// import { Box } from '../Box';
import { ReturnButton } from 'components/ReturnButton/ReturnButton';
import { useLocation } from 'react-router-dom';
import { ErrorBox } from './ErrorPage.styled';

const ErrorPage = ({ rtnBtn = true }) => {
  const location = useLocation();

  return (
    <ErrorBox>
      {rtnBtn && (
        <ReturnButton
          returnPath={location.state?.from ?? '/home'}
          text="Back to main"
        />
      )}
    </ErrorBox>
  );
};
export default ErrorPage;
