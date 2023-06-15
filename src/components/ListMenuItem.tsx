'use client';

import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { MenuItemProps } from '@/types'
import { useOrder } from '@/context/order.context';

const AddToCartButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '50%',
}));

const ListMenuItem: React.FC<MenuItemProps> = (item) => {
  const { addToOrder } = useOrder();
  const truncatedDescription = item.description.length > 60 ? item.description.substring(0, 60) + "..." : item.description;

  return (
    <ListItem>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        {/* Text */}
        <Grid item xs={8}>
          <ListItemText
            primary={
              <div>
                <Typography variant="body1" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncatedDescription}
                </Typography>
              </div>
            }
          />
        </Grid>

        {/* Price */}
        <Grid item xs justifyContent="center" display="flex">
          <Typography variant="body1" component="h2">
            ${item.price.toFixed(2)}
          </Typography>
        </Grid>

        {/* Button */}
        <Grid item xs justifyContent="center" display="flex">
          <IconButton onClick={() => addToOrder(item)} color="success" size="large">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default ListMenuItem;
