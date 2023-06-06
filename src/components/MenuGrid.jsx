// /src/components/MenuGrid.js
import MenuItem from './MenuItem';

function MenuGrid({ menuItems }) {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {menuItems.map(item => (
                <div key={item.id} style={{margin: '1em'}}>
                    <MenuItem item={item} />
                </div>
            ))}
        </div>
    );
}

export default MenuGrid;
