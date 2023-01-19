import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { HeroSection } from './HeroSection';

const mainHeading = "Test heading"
const mainText = "Test text text test text"
const buttonOneText = "Test button one"
const buttonTwoText = "Test button two"

test('renders text correctly', () => {
  render(
    <HeroSection
      mainHeading={mainHeading} 
      mainText={mainText}
      buttonOneText={buttonOneText}
      buttonTwoText={buttonTwoText}
    />
  );

  const headingElement = screen.getByText('Test heading');
  const mainTextElement = screen.getByText('Test text text test text');

  expect(headingElement).toBeDefined();
  expect(mainTextElement).toBeDefined();
});
