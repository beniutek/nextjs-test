import { styled } from '@mui/system';

const Header = styled('header')(({ theme }) => ({
  // Style your header here
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export default Header;