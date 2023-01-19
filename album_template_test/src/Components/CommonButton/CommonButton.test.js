import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { CommonButton } from './CommonButton';

test('renders text correctly', () => {
  render(<CommonButton>Test text</CommonButton>);

  const element = screen.getByText('Test text');
  expect(element).toBeDefined();
});
