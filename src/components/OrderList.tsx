import { OrderItem } from '@/context/order.context';
import { List, ListItem, Typography, Grid } from '@mui/material';

interface OrderListProps {
  items: OrderItem[];
}

const OrderList: React.FC<OrderListProps> = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1">{item.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">${item.price.toFixed(2)}</Typography>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default OrderList;
