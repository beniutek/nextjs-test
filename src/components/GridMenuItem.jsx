import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function MediaCard({ item }) {
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
        <Button size="small">{`Price: $${item.price.toFixed(2)}`}</Button>
        <Link href={`/menu/${item.id}`}>Learn more</Link>
      </CardActions>
    </Card>
  );
}