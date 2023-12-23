import { Component } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <>
        <div
          className={styles.overlay}
          onClick={e => {
            e.target === e.currentTarget && this.props.toggleModal(e);
          }}
        >
          <div className={styles.modal}>{this.props.children}</div>
        </div>
      </>,
      modalRoot
    );
  }
}
