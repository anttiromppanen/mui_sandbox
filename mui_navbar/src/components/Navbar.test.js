import React from 'react';
import { render, screen } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import Navbar from './Navbar';

const createMatchMedia = (width) => (query) => ({
  matches: mediaQuery.match(query, { width }),
  addListener: () => {},
  removeListener: () => {},
});

const smallScreenMatchMedia = createMatchMedia(899);
const largeScreenMatchMedia = createMatchMedia(900);

const smallScreenTestID = /small-navbar/i;
const largeScreenTestID = /desktop-navbar/i;

describe('<Navbar />', () => {
  describe('when screensize is small', () => {
    it('should render <NavbarSmallScreen> if screensize is below 900px', () => {
      window.matchMedia = smallScreenMatchMedia;
      render(<Navbar />);

      expect(screen.getByTestId(smallScreenTestID)).toBeInTheDocument();
    });

    it('should not render <NavbarDesktop> if screensize is below 900px', () => {
      window.matchMedia = smallScreenMatchMedia;
      render(<Navbar />);

      expect(screen.queryByTestId(largeScreenTestID)).not.toBeInTheDocument();
    });
  });

  describe('when screensize is large', () => {
    it('should render <NavbarDesktop> if screensize is 900px or over', () => {
      window.matchMedia = largeScreenMatchMedia;
      render(<Navbar />);

      expect(screen.getByTestId(largeScreenTestID)).toBeInTheDocument();
    });

    it('should not render <NavbarSmallScreen> if screensize is 900px or over', () => {
      window.matchMedia = largeScreenMatchMedia;
      render(<Navbar />);

      expect(screen.queryByTestId(smallScreenTestID)).not.toBeInTheDocument();
    });
  });
});
