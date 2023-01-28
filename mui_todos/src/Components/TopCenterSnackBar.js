/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Alert, Snackbar } from '@mui/material';

// eslint-disable-next-line react/prop-types
const TopCenterSnackBar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  useImperativeHandle(ref, () => ({
    handleSnackBarClick: (id) => {
      setTodoId(id);
      setShowSnackbar(true);
    },
  }));

  return (
    <div>
      <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={showSnackbar} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity="success">
          Succesfully deleted task #{todoId}
        </Alert>
      </Snackbar>
    </div>
  );
});

export default TopCenterSnackBar;
