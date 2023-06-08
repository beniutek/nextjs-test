import Image from 'next/image';
import Link from 'next/link';

import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

interface ItemProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface MenuItemProps {
  item: ItemProps;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  console.log("got props ? ", item);
  return (
    <StyledListItem>
      <ListItemAvatar>
        <StyledAvatar variant="square" alt={item.name} src={item.image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div>
            <Typography variant="body1" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </div>
        }
      />
      <Typography variant="body1" component="h2">
        ${item.price.toFixed(2)}
      </Typography>
    </StyledListItem>
  );
}

export default MenuItem;
