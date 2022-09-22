import { FcHome } from 'react-icons/fc';
import { MdMovieFilter } from 'react-icons/md';
import { Box } from '../Box';
import { StyledNavItem } from './AppBar.styled';

const navItems = [
  { href: '/home', text: 'Home', icon: FcHome },
  { href: '/movies', text: 'Movies', icon: MdMovieFilter },
];

const AppBar = () => {
  return (
    <Box as="header" p={3} width="100vw" borderBottom="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <StyledNavItem to={href} key={href}>
            <Icon size="16px" />
            {text}
          </StyledNavItem>
        ))}
      </Box>
    </Box>
  );
};
export default AppBar;
