import React, { useRef } from 'react';
import { Container } from '@mui/material';
import ShowTodos from './Components/ShowTodos';
import TopCenterSnackBar from './Components/TopCenterSnackBar';

function App() {
  const snackbarRef = useRef(null);

  return (
    <Container>
      <TopCenterSnackBar ref={snackbarRef} />
      <ShowTodos snackbarRef={snackbarRef} />
    </Container>
  );
}

export default App;
