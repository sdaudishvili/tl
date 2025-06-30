import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    title: 'Test Modal',
    children: <p>Modal content</p>,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not render the modal when `isOpen` is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument();
  });

  it('should render the modal when `isOpen` is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Test Modal');
    expect(screen.getByTestId('modal-body')).toHaveTextContent('Modal content');
  });

  it('should call `onClose` when clicking the overlay', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should not call `onClose` when clicking inside the modal content', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('modal-content'));
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('should call `onClose` when the close button is clicked', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('modal-close-button'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should prevent body scrolling when `isOpen` is true', () => {
    render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore body scrolling when the modal is closed', () => {
    const { unmount } = render(<Modal {...defaultProps} />);
    unmount();
    expect(document.body.style.overflow).toBe('auto');
  });
});
