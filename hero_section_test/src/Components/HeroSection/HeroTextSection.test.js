import { render, screen } from '@testing-library/react';
import { HeroTextSection } from './HeroTextSection';
import { ThemeProvider } from '@mui/material/styles'; 
import theme from '../../theme';

describe('<HeroTextSection />', () =>  {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ThemeProvider theme={theme}>
        <HeroTextSection heroHeading="Test heading" heroText="Test body text" />
      </ThemeProvider>
    );
  });

  test('renders heading correctly', () => {
    const headerElement = screen.getByText("Test heading");
    expect(headerElement).toBeDefined();
  });

  test('renders body text correctly', () => {
    const textBody = screen.getByText("Test body text");
    expect(textBody).toBeDefined();
  });
});
