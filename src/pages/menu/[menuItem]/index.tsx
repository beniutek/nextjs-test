// /src/components/MenuList.js
import { useRouter } from 'next/router';
import MenuItemComponent from '@/components/GridMenuItem';

const x = {
  id: '2',
  name: 'Veggie Pizza',
  description: 'A delicious veggie pizza with fresh peppers, olives, and tomatoes',
  image: '/images/menu-items/veggie-pizza.png',
  price: 14.99
};

export default function MenuItem(props) {
  const router = useRouter();

  // This will be the value of `[menuItem]` from the URL
  const { query } = router.query;

  console.log("GOT MENUBITEM query: ", router.query);
  return (
    <MenuItemComponent item={x} />
  );
}
