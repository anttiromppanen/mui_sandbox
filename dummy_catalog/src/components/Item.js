import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function Item({ id, name, description, image }) {
  return (
    <Grid item container justifyContent="center" xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 500 }} elevation={0}>
        <CardActionArea>
          <Link to={`items/${id}`} style={{ textDecoration: 'none' }} >
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="image of item"
            />
            <CardContent>
              <Typography
                gutterBottom
                color="black"
                variant="h5"
                component="div"
                height="100px"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                height="170px"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '7',
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Item;