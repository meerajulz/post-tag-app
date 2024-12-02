import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Medical Report Auto-Complete/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Medical Report Auto-Complete/i)
    ).toBeInTheDocument();
  });

  test('includes InputMessage component', () => {
    render(<App />);
    expect(screen.getByTestId('message-container')).toBeInTheDocument(); // Ensure InputMessage has a 'data-testid="message-container"'
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
