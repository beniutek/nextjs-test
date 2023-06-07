// /src/pages/menu/index.js
import { useState } from 'react';
import MenuGrid from '@/components/MenuGrid';
import MenuList from '@/components/MenuList';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// This is mock data for the purpose of this example.
// You may replace this with actual data in your project.
const menuItems = [
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

export default function MenuPage(props) {
    // You can choose to render either the MenuGrid or the MenuList, depending on your design.
    // Here we are rendering both just to illustrate, but in a real application you'd likely choose one or the other.
    console.log('props ? ', props);
    const [view, setView] = useState('list');

    const handleViewChange = (event, newView) => {
        setView(newView);
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
                <MenuList menuItems={menuItems} />
            ) : (
                <MenuGrid menuItems={menuItems} />
            )}
        </div>
    );
}

export async function getStaticProps() {
  const menu = await Promise.resolve({
    menu: {
      items: menuItems
    }
  });

  return {
    props: menu
  }
}