// /pages/order.tsx

import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import OrderList from '@/components/OrderList';
import OrderSummary from '@/components/OrderSummary';
import { useOrder } from '@/context/order.context';

export default function OrderPage() {
  const { items } = useOrder(); // Use context to access the order

  const [total, setTotal] = useState(0);

  // calculating the total
  useEffect(() => {
    const totalSum = items.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalSum);
  }, [items]);

  const handleConfirm = () => {
    // Here, you can implement your order confirmation logic
    console.log("Order confirmed!");
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Twoje zamówienie
      </Typography>
      <OrderList items={items} />
      <OrderSummary total={total} onConfirm={handleConfirm} />
    </Container>
  );
}
