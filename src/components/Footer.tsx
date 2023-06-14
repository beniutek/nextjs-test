import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Face6Icon from '@mui/icons-material/Face6';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Badge from '@mui/material/Badge';
import Link from 'next/link';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          href="/service"
          label="Wezwij kelnera"
          icon={<Face6Icon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/menu"
          label="Menu"
          icon={<MenuBookIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/order"
          label="Koszyk"
          icon={
            <Badge badgeContent={4} color="error">
              <RestaurantMenuIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
