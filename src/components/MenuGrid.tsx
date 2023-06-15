// Importing necessary libraries and types
import { MenuItemProps } from '@/types';
import GridMenuItem from './GridMenuItem';
import { Box } from '@mui/material';

interface MenuGridProps {
  menuItems: MenuItemProps[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ menuItems }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', "&:last-child": { marginBottom: '50px' }}}>
            {menuItems.map(item => (
              <GridMenuItem item={item} key={item.id} />
            ))}
        </Box>
    );
}

export default MenuGrid;
