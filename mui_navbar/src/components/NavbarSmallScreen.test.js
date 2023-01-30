import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import NavbarSmallScreen from './NavbarSmallScreen';
import pages from '../data/const';

describe('<NavbarSmallScreen />', () => {
  it('should not contain navigation menu initially', () => {
    render(<NavbarSmallScreen />);
    expect(screen.queryByTestId(/small-screen-hamburger-menu/i)).not.toBeInTheDocument();
  });

  it('should open navigation menu when hamburger icon is pressed', () => {
    render(<NavbarSmallScreen />);
    const navOpenButton = screen.getByTestId(/nav-open-button/i);
    fireEvent.click(navOpenButton);

    expect(screen.getByTestId(/small-screen-hamburger-menu/i)).toBeInTheDocument();
  });

  it('should contain all navigation pages', () => {
    render(<NavbarSmallScreen />);
    const navOpenButton = screen.getByTestId(/nav-open-button/i);
    fireEvent.click(navOpenButton);

    const listItems = screen.getAllByLabelText('small-nav-page-link');

    expect(pages.length).toBe(listItems.length);
  });
});
