// /components/OrderList.tsx

import { List, ListItem, ListItemText, Typography } from '@mui/material';

interface OrderItemProps {
  id: string;
  name: string;
  price: number;
}

interface OrderListProps {
  items: OrderItemProps[];
}

const OrderList: React.FC<OrderListProps> = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.id}>
        <ListItemText
          primary={item.name}
          secondary={<Typography variant="body2">{`$${item.price.toFixed(2)}`}</Typography>}
        />
      </ListItem>
    ))}
  </List>
);

export default OrderList;