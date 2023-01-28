import React from 'react';
import {
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  Card,
  CardHeader, Stack, CardActions, Box, CircularProgress,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import useFetchTodo from '../hooks/useFetchTodo';
import DeleteButton from './DeleteButton';

// eslint-disable-next-line react/prop-types
function ShowTodos({ snackbarRef }) {
  const {
    isLoading, isError, error, data,
  } = useFetchTodo();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px',
      }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        An error has occurred:
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
        >
          Todos
        </Typography>
      </Grid>
      {data
          && data.map((x) => (
            <Grid item container xs={6} md={4} xl={3} key={x.id}>
              <Card component={Stack} direction="column" justifyContent="space-between" sx={{ width: 345, backgroundColor: 'lightyellow' }}>
                <Box sx={{ height: '100%' }}>
                  <CardActionArea component={Stack} direction="column" sx={{ height: '100%' }}>
                    <CardHeader
                      avatar={x.completed ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                      sx={{ paddingBottom: 1 }}
                      title={`id: ${x.id}`}
                    />
                    <CardContent sx={{ paddingTop: 0 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {x.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Box>
                <CardActions sx={{ minHeight: '79px' }}>
                  <DeleteButton id={x.id} snackbarRef={snackbarRef} />
                </CardActions>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
}

export default ShowTodos;
