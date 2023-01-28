import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton';

describe('<DeleteButton />', () => {
  test('should render delete button initially', () => {
    render(<DeleteButton id={1} />);

    expect(screen.getByTestId(/initialDeleteButton/i)).toBeInTheDocument();
  });

  test('dom should not contain confirm and cancel buttons initially', () => {
    render(<DeleteButton id={1} />);
    const confirmResult = screen.getByTestId(/confirmDeleteSlide/i);
    const style = window.getComputedStyle(confirmResult);

    expect(style.display).toBe('none');
  });

  test('should render confirm and cancel buttons when delete button is pressed', () => {
    render(<DeleteButton id={1} />);
    const deleteButton = screen.getByTestId(/initialDeleteButton/i);

    fireEvent.click(deleteButton);
    expect(screen.getByTestId(/confirmButton/i)).toBeInTheDocument();
    expect(screen.getByTestId(/cancelButton/i)).toBeInTheDocument();
  });
});
