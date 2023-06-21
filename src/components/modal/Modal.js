import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    e.target !== e.currentTarget && closeModal();
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">{children} </div>
    </div>,
    modalRoot
  );
};

Modal.propType = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
