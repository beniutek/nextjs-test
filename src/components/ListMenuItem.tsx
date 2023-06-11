// import Image from 'next/image';
// import Link from 'next/link';

// import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import { MenuItemProps } from '@/types'

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
// }));

// const StyledAvatar = styled(Avatar)(({ theme }) => ({
//   marginRight: theme.spacing(2),
// }));

// interface ListMenuItemProps {
//   item: MenuItemProps;
// }

// const ListMenuItem: React.FC<ListMenuItemProps> = ({ item }) => {
//   return (
//     <StyledListItem>
//       <ListItemAvatar>
//         <StyledAvatar variant="square" alt={item.name} src={item.image} />
//       </ListItemAvatar>
//       <ListItemText
//         primary={
//           <div>
//             <Typography variant="body1" component="h2">
//               {item.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {item.description}
//             </Typography>
//           </div>
//         }
//       />
//       <Typography variant="body1" component="h2">
//         ${item.price.toFixed(2)}
//       </Typography>
//     </StyledListItem>
//   );
// }

// export default ListMenuItem;
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { MenuItemProps } from '@/types'

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const AddToCartButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  borderRadius: '50%',
}));

const FlexDiv = styled('div')({
  display: 'flex',
});

interface ListMenuItemProps {
  item: MenuItemProps;
  addToMenu: (item: MenuItemProps) => void;
}

const ListMenuItem: React.FC<ListMenuItemProps> = ({ item, addToMenu }) => {
  return (
    <StyledListItem>
      <FlexDiv style={{ width: '15%', justifyContent: 'flex-start' }}>
        <ListItemAvatar>
          <StyledAvatar variant="square" alt={item.name} src={item.image} />
        </ListItemAvatar>
      </FlexDiv>
      <FlexDiv style={{ width: '50%', justifyContent: 'flex-start' }}>
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
      </FlexDiv>
      <FlexDiv style={{ width: '15%', justifyContent: 'flex-end' }}>
        <AddToCartButton onClick={() => addToMenu(item)} size="small">
          <AddIcon />
        </AddToCartButton>
      </FlexDiv>
      <FlexDiv style={{ width: '20%', justifyContent: 'flex-end' }}>
        <Typography variant="body1" component="h2">
          ${item.price.toFixed(2)}
        </Typography>
      </FlexDiv>
    </StyledListItem>
  );
}

export default ListMenuItem;
