// /pages/order.tsx

import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import OrderList from '@/components/OrderList';
import OrderSummary from '@/components/OrderSummary';
import { Order, OrderItem, useOrder } from '@/context/order.context';

const calculateTotal = (order: Order): number => {
  let total = 0;

  for (const itemId in order) {
    const item = order[itemId];
    total += item.price * item.quantity;
  }

  return total;
};


export default function OrderPage() {
  const { order } = useOrder();
  const totalPrice = calculateTotal(order);

  const handleConfirm = () => {
    // Here, you can implement your order confirmation logic
    console.log("Order confirmed!");
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Twoje zamówienie
      </Typography>
      <OrderList items={Object.values(order)} />
      <OrderSummary total={totalPrice} onConfirm={handleConfirm} />
    </Container>
  );
}
