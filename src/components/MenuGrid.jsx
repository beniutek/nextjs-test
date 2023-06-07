import GridMenuItem from './GridMenuItem';

function MenuGrid({ menuItems }) {
    console.log("menug gird items: ", menuItems);
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
