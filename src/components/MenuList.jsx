import { List } from '@mui/material';
import MenuItem from './MenuItem';

function MenuList({ menuItems }) {
    console.log("MenuList got menuItems: ", menuItems);
    return (
        <List>
            {menuItems.map((item, i) => (
              <MenuItem item={item} key={i} />
            ))}
        </List>
    );
}

export default MenuList;
