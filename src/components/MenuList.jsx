// /src/components/MenuList.js
import MenuItem from './MenuItem';

function MenuList({ menuItems }) {
    return (
        <ul>
            {menuItems.map(item => (
                <li key={item.id}>
                    <MenuItem item={item} />
                </li>
            ))}
        </ul>
    );
}

export default MenuList;
