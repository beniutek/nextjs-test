// /components/OrderSummary.tsx

import { Button, Typography, Box } from '@mui/material';

interface OrderSummaryProps {
  total: number;
  onConfirm: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total, onConfirm }) => (
  <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
    <Typography variant="h6">{`Total: $${total.toFixed(2)}`}</Typography>
    <Button variant="contained" color="primary" onClick={onConfirm}>
      Confirm Order
    </Button>
  </Box>
);

export default OrderSummary;