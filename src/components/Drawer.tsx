// Drawer.tsx
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: '250px',
}));

const DrawerComponent = ({open, toggleDrawer}) => {

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* Pass your drawer list items here */}
        <ListItem button>
          <ListItemText primary={'Drawer Item'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
      <StyledDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </StyledDrawer>
  );
}

export default DrawerComponent;
