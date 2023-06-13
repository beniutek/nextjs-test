import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { ListMenuItemProps } from '@/types'

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const AddToCartButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '50%',
}));

const ListMenuItem: React.FC<ListMenuItemProps> = ({ item, addToOrder }) => {
  const truncatedDescription = item.description.length > 60 ? item.description.substr(0, 60) + "..." : item.description;

  return (
    <ListItem>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        {/* Image */}
        {/* <Grid item xs={3}>
          <ListItemAvatar>
            <StyledAvatar variant="square" alt={item.name} src={item.image} />
          </ListItemAvatar>
        </Grid> */}

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
          <AddToCartButton onClick={() => addToOrder(item)} size="small" >
            <AddIcon />
          </AddToCartButton>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default ListMenuItem;
