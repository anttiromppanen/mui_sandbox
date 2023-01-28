/* eslint-disable react/prop-types */
import {
  Button, Stack, Typography, Slide, Box,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ConfirmDeleteDialog({ id, setShowConfirmDelete, snackbarRef }) {
  const handleCancel = () => setShowConfirmDelete(false);
  const handleDelete = () => {
    setShowConfirmDelete(false);
    snackbarRef.current.handleSnackBarClick(id);
  };

  return (
    <Box>
      <Typography variant="h6">Confirm delete:</Typography>
      <Stack direction="row">
        <Button
          data-testid="confirmButton"
          size="small"
          variant="contained"
          color="success"
          sx={{ marginRight: 1 }}
          onClick={() => handleDelete()}
        >
          Confirm
        </Button>
        <Button
          data-testid="cancelButton"
          size="small"
          variant="contained"
          color="error"
          onClick={() => handleCancel()}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}

function DeleteButton({ id, snackbarRef }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const containerRef = React.useRef(null);

  const handleDeleteButtonClick = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };

  return (
    <Box ref={containerRef}>
      <Button
        data-testid="initialDeleteButton"
        color="error"
        size="large"
        onClick={() => handleDeleteButtonClick()}
        sx={{ display: showConfirmDelete ? 'none' : 'block', position: 'relative', bottom: -25 }}
      >
        Delete
      </Button>
      <Slide
        data-testid="confirmDeleteSlide"
        direction="up"
        in={showConfirmDelete}
        container={containerRef.current}
        timeout={500}
        sx={{ display: showConfirmDelete ? 'block' : 'none' }}
      >
        {ConfirmDeleteDialog({ id, setShowConfirmDelete, snackbarRef })}
      </Slide>
    </Box>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

ConfirmDeleteDialog.propTypes = {
  id: PropTypes.number.isRequired,
  setShowConfirmDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
