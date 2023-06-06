// /src/components/MenuList.js
import MenuItemComponent from '@/components/MenuItem';

const x = {
  id: '2',
  name: 'Veggie Pizza',
  description: 'A delicious veggie pizza with fresh peppers, olives, and tomatoes',
  image: '/images/menu-items/veggie-pizza.png',
  price: 14.99
};

export default function MenuItem(props) {
  return (
    <MenuItemComponent item={x} />
  );
}
