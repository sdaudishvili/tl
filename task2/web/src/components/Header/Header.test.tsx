import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render the header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render the logo with icon and text', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('logo-icon')).toHaveTextContent('🚀');
    expect(screen.getByTestId('logo-text')).toHaveTextContent(
      'Journey Planner',
    );
  });

  it('should render the user button with avatar', () => {
    render(<Header />);
    expect(screen.getByTestId('user-button')).toBeInTheDocument();
    expect(screen.getByTestId('user-avatar')).toHaveTextContent('👤');
  });

  it('should alert when user button is clicked', () => {
    window.alert = jest.fn();
    render(<Header />);
    fireEvent.click(screen.getByTestId('user-button'));
    expect(window.alert).toHaveBeenCalledWith('User profile');
  });
});
