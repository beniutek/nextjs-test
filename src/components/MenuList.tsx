import { List } from '@mui/material';
import ListMenuItem from './ListMenuItem';
import { MenuItemProps } from '@/types';

interface MenuListProps {
  menuItems: MenuItemProps[];
  addToOrder: (item: MenuItemProps) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menuItems, addToOrder }) => {

  return (
    <List>
      {menuItems.map((item, i) => (
        <ListMenuItem item={item} addToOrder={addToOrder} key={i} />
      ))}
    </List>
  );
}

export default MenuList;
