// /pages/order.tsx

import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import OrderList from '@/components/OrderList';
import OrderSummary from '@/components/OrderSummary';

export default function OrderPage() {
  const [items, setItems] = useState([]); // initialize with the items passed via props
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
        Your Order
      </Typography>
      <OrderList items={items} />
      <OrderSummary total={total} onConfirm={handleConfirm} />
    </Container>
  );
}
