import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import { MenuItemProps } from '@/types';
import { useOrder } from '@/context/order.context';

interface MediaCardProps {
  item: MenuItemProps;
}

const GridMenuItem: React.FC<MediaCardProps> = ({ item }) => {
  const { addToOrder, removeFromOrder, order } = useOrder();
  const initialQuantity = order[item.id] ? order[item.id].quantity : 0
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    addToOrder(item);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
    removeFromOrder(item.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ item.image }
        title={ item.name }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { item.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { item.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>{`Price: $${item.price.toFixed(2)}`}</Typography>
        <Box display="flex" alignItems="center" sx={{ marginLeft: 'auto' }}>
          <IconButton onClick={decrementQuantity} disabled={quantity === 0} color="error">
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={incrementQuantity} color="success">
            <AddIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default GridMenuItem;
