import { useState } from 'react';
import { OrderItem, useOrder } from '@/context/order.context';
import { List, ListItem, Typography, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

interface OrderListItemProps {
  item: OrderItem;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ item }) => {
  const { removeFromOrder, order } = useOrder();
  const initialQuantity = order[item.id] ? order[item.id].quantity : 0
  const [quantity, setQuantity] = useState(initialQuantity);

  const decrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
    removeFromOrder(item.id);
  };

  return (
    <ListItem>
      <Grid container display="flex" direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="body1">{item.name}</Typography>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="flex-end">
          <Typography variant="body1">${item.price.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="flex-end">
          <Typography>{item.quantity}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={decrementQuantity} disabled={quantity === 0} color="error">
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default OrderListItem;
