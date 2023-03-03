import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import img1 from './static/img1.jpg';
import { Box } from '@mui/material';

const item = {
  hidden: { y: -30, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

const item2 = {
  hidden: { opacity: 0.2 },
  show: { opacity: 1 }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
      duration: 1
    },
  }
}

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={1} component={motion.div} variants={item}>
      <Box component={motion.div} variants={container}>
        <CardMedia
          sx={{ height: 140 }}
          image={img1}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={motion.div} variants={item2}>
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" component={motion.div} variants={item2}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default MediaCard;