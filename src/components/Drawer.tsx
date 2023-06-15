// Drawer.tsx
import { useState } from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/system';
import Image from 'next/image';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
}));

const DrawerComponent = ({open, toggleDrawer}) => {
  return (
    <StyledDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List sx={{ marginTop: 8 }}>
          <ListItem component={Link} href="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemText primary="O nas" />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon><Image src="/images/flags/gb.svg" alt="English" width={24} height={24} /></ListItemIcon>
            <ListItemText primary="English" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Image src="/images/flags/pl.svg" alt="Polski" width={24} height={24} /></ListItemIcon>
            <ListItemText primary="Polski" />
          </ListItem>
          <ListItem>
            <ListItemIcon><Image src="/images/flags/ua.svg" alt="Український" width={24} height={24} /></ListItemIcon>
            <ListItemText primary="Український" />
          </ListItem>
        </List>
      </Box>
    </StyledDrawer>
  );
}

export default DrawerComponent;
