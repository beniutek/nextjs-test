import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Face6Icon from '@mui/icons-material/Face6';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Badge from '@mui/material/Badge';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Wezwij kelnera" icon={<Face6Icon />} />
        <BottomNavigationAction
          label="Twoje zamówienie"
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