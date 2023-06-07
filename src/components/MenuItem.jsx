// /src/components/MenuItem.js
import Image from 'next/image';
import Link from 'next/link';

// function MenuItem({ item }) {
//     return (
//         <Link href={`/menu/${item.id}`}>
//           <div>
//               <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={500}
//                   height={300}
//               />
//               <h2>{item.name}</h2>
//               <p>{item.description}</p>
//               <p>{`Price: $${item.price.toFixed(2)}`}</p>
//           </div>
//         </Link>
//     );
// }

// export default MenuItem;
// /src/components/MenuItem.js
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled component for the styles
const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

function MenuItem({ item }) {
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
