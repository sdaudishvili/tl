import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      data-testid="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        data-testid="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" data-testid="modal-header">
          <p id="modal-title" data-testid="modal-title">
            {title}
          </p>
          <button
            className="modal-close-button"
            data-testid="modal-close-button"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <main className="modal-body" data-testid="modal-body">
          {children}
        </main>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
