import * as React from 'react';
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Face6Icon from '@mui/icons-material/Face6';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GridViewIcon from '@mui/icons-material/GridView';
import ListViewIcon from '@mui/icons-material/Reorder';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import { Order, useOrder } from '@/context/order.context';
import { useMenu } from '@/context/menu.context';


const totalOrderItems = (order: Order) => {
  let totalItems = 0;
    for (const key in order) {
      totalItems += order[key].quantity;
    }
  return totalItems;
};

export default function SimpleBottomNavigation() {
  const router = useRouter()
  const { order } = useOrder();
  const { handleViewChange } = useMenu();
  const initialValue = router.asPath === '/menu' ? 'list' : router.asPath;
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (value === 'list' || value === 'grid') handleViewChange(value);
  }, [value]);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue === '/menu' ? 'list' : newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          href="/service"
          value="/service"
          label="Wezwij kelnera"
          icon={<Face6Icon />}
          sx={{
            padding: 0,
            fontFamily: 'Abhaya Libre'
          }}
        />
        {
          router.asPath === '/menu' && (
              <BottomNavigationAction
                label="Lista"
                value="list"
                icon={<ListViewIcon />}
                sx={{
                  padding: 0,
                  fontFamily: 'Abhaya Libre'
                }}
              />
          )
        }
        {
          router.asPath === '/menu' && (
              <BottomNavigationAction
                label="Kafelki"
                value="grid"
                icon={<GridViewIcon />}
                sx={{
                  padding: 0,
                  fontFamily: 'Abhaya Libre'
                }}
              />
          )
        }
        {
          router.asPath !== '/menu' && (
            <BottomNavigationAction
              component={Link}
              href="/menu"
              label="Menu"
              value="/menu"
              icon={<MenuBookIcon />}
              sx={{
                padding: 0,
                fontFamily: 'Abhaya Libre'
              }}
            />
          )
        }
        <BottomNavigationAction
          component={Link}
          href="/order"
          label="Koszyk"
          value="/order"
          sx={{
            padding: 0,
            fontFamily: 'Abhaya Libre'
          }}
          icon={
            <Badge badgeContent={totalOrderItems(order)} color="error">
              <RestaurantMenuIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
