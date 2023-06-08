import { useState, ChangeEvent } from 'react';
import MenuGrid from '@/components/MenuGrid';
import MenuList from '@/components/MenuList';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { GetStaticProps } from 'next';

interface ItemProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface MenuProps {
  menuItems: ItemProps[];
}

const menuItems: ItemProps[] = [
  {
    id: '1',
    name: 'Chicken Burger',
    description: 'A juicy chicken burger with lettuce, tomato, and mayo',
    image: '/images/menu-items/chicken-burger.png',
    price: 9.99
  },
  {
    id: '2',
    name: 'Veggie Pizza',
    description: 'A delicious veggie pizza with fresh peppers, olives, and tomatoes',
    image: '/images/menu-items/veggie-pizza.png',
    price: 14.99
  },
  // add more items as necessary...
];

const MenuPage: React.FC<MenuProps> = (props) => {
  const [view, setView] = useState<string>('list');

  const handleViewChange = (event: ChangeEvent<{}>, newView: string | null) => {
    if(newView !== null){
      setView(newView);
    }
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
      >
        <ToggleButton value="list">
          List
        </ToggleButton>
        <ToggleButton value="grid">
          Grid
        </ToggleButton>
      </ToggleButtonGroup>
      {view === 'list' ? (
        <MenuList menuItems={props.menuItems} />
      ) : (
        <MenuGrid menuItems={props.menuItems} />
      )}
    </div>
  );
}

export default MenuPage;

export const getStaticProps: GetStaticProps = async () => {
  const menu = await Promise.resolve({
    menuItems: menuItems
  });

  return {
    props: menu
  }
}
