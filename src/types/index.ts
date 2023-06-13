export interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ListMenuItemProps {
  item: MenuItemProps;
  addToOrder: (item: MenuItemProps) => void;
}
