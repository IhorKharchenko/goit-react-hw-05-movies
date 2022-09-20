import {
  BsStack,
  BsWalletFill,
  // BsBriefcaseFill,
  // BsChatLeftTextFill,
  // BsPersonLinesFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from './Box';

const navItems = [
  { href: '/home', text: 'Home', icon: BsStack },
  { href: '/movies', text: 'Movies', icon: BsWalletFill },
  // { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  // { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  // { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
const AppBar = () => {
  return (
    <Box as="header" p={3} width="100vw" borderBottom="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16px" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
export default AppBar;