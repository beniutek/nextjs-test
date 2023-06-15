import { useState } from 'react';
import { OrderItem, useOrder } from '@/context/order.context';
import { List, ListItem, Typography, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import OrderListItem from './OrderListItem';

interface OrderListProps {
  items: OrderItem[];
}

const OrderList: React.FC<OrderListProps> = ({ items }) => {
  const { addToOrder, removeFromOrder, order } = useOrder();

  return (
    <List>
      {items.map((item) => (
        <OrderListItem item={item} key={item.id} />
      ))}
    </List>
  );
};

export default OrderList;
