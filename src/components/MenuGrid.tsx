// Importing necessary libraries and types
import { MenuItemProps } from '@/types/menu';
import GridMenuItem from './GridMenuItem';

interface MenuGridProps {
  menuItems: MenuItemProps[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ menuItems }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {menuItems.map(item => (
                <div key={item.id} style={{margin: '1em'}}>
                    <GridMenuItem item={item} />
                </div>
            ))}
        </div>
    );
}

export default MenuGrid;
