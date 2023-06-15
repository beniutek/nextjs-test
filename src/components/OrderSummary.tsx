// /components/OrderSummary.tsx

import { Button, Typography, Box, Grid } from '@mui/material';

interface OrderSummaryProps {
  total: number;
  onConfirm: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total, onConfirm }) => (
  <Grid display="flex" flexDirection="column" alignItems="center" gap={2}>
    <Grid item display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
      <Typography variant="h6" alignSelf="flex-start" sx={{ fontFamily: 'Abril Fatface' }}>{"Całość:"}</Typography>
      <Typography variant="h6" alignSelf="flex-end" sx={{ fontFamily: 'Abhaya Libre' }}>{total.toFixed(2)}</Typography>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" onClick={onConfirm} sx={{ fontFamily: 'Abhaya Libre' }}>
        Zamów
      </Button>
    </Grid>
  </Grid>
);

export default OrderSummary;