import { List } from '@mui/material';
import ListMenuItem from './ListMenuItem';
import { MenuItemProps } from '@/types';

interface MenuListProps {
  menuItems: MenuItemProps[];
}

const MenuList: React.FC<MenuListProps> = ({ menuItems }) => {

  return (
    <List>
      {menuItems.map((item, i) => (
        <ListMenuItem { ...item } key={i} />
      ))}
    </List>
  );
}

export default MenuList;
