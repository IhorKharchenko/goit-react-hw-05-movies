import { RtnBtnLink } from './ReturnButton.styled';
import { VscDebugStepBack } from 'react-icons/vsc';

export const ReturnButton = ({ returnPath, text }) => {
  return (
    <RtnBtnLink to={returnPath}>
      <VscDebugStepBack />
      {text}
    </RtnBtnLink>
  );
};
