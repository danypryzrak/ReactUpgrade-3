import { useEffect } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root');

export const Modal = ({ closeModal, toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return createPortal(
    <>
      <div
        className={styles.overlay}
        onClick={e => {
          e.target === e.currentTarget && toggleModal(e);
        }}
      >
        <div className={styles.modal}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};
