import { useState, ChangeEvent } from 'react';
import MenuGrid from '@/components/MenuGrid';
import MenuList from '@/components/MenuList';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { MenuItemProps } from '@/types';
import { GetStaticProps } from 'next';

interface MenuProps {
  menuItems: MenuItemProps[];
}


const Heading = styled('h1')({
  display: 'flex',
  justifyContent: 'space-between',
});


const MenuPage: React.FC<MenuProps> = (props) => {
  const [view, setView] = useState<string>('list');

  const handleViewChange = (event: ChangeEvent<{}>, newView: string | null) => {
    if(newView !== null){
      setView(newView);
    }
  };

  const addToOrder = (item: MenuItemProps) => {
    console.log('item added!', item);
  };

  return (
    <Box sx={{ display: 'grid' }}>
      <Heading>Our Menu</Heading>
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
      {
        view === 'list' ? (
          <MenuList menuItems={props.menuItems} addToOrder={addToOrder} />
        ) : (
          <MenuGrid menuItems={props.menuItems} />
        )
      }
    </Box>
  );
}

export default MenuPage;

const menuItems: MenuItemProps[] = [
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
  {
    id: '3',
    name: 'Meat Pizza',
    description: 'With melty mozzarella cheese, seasoned ground beef and the sweet taste of caramelized onions',
    image: '/images/menu-items/meat-pizza.png',
    price: 16.99
  }
  // add more items as necessary...
];

export const getStaticProps: GetStaticProps = async () => {
  const menu = await Promise.resolve({
    menuItems: menuItems
  });

  return {
    props: menu
  }
}
