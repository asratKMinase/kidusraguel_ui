
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../pictures/notification.jpg'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="170"
        image={Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          History
        </Typography>
        <Typography variant="body2" color="text.secondary">
        St Raguel Ethiopian Orthodox Church in Manor, TX 78635 is founded in 2001.
        The church is landed on 10 acre land located at 19000 St Raguel road.
        It has significant impact on the community by providing irreplaceable service.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href = "/history">Share</Button>
        <Button size="small" href = "/history">Learn More</Button>
      </CardActions>
    </Card>
  );
}
