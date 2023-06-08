// /src/components/MenuList.tsx
import { List } from '@mui/material';
import ListMenuItem from './ListMenuItem';

interface ItemProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface MenuListProps {
  menuItems: ItemProps[];
}

const MenuList: React.FC<MenuListProps> = ({ menuItems }) => {
  return (
    <List>
      {menuItems.map((item, i) => (
        <ListMenuItem item={item} key={i} />
      ))}
    </List>
  );
}

export default MenuList;
