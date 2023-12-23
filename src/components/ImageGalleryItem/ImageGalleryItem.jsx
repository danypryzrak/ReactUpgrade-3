import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { isShowModal: !prevState.isShowModal };
    });
  };

  closeModal = () => {
    this.setState(prevState => {
      return {
        isShowModal: false,
      };
    });
  };
  render() {
    return (
      <li className={css.galleryItem}>
        <img
          className={css.image}
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.toggleModal}
        />
        {this.state.isShowModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            toggleModal={this.toggleModal}
            closeModal={this.closeModal}
          >
            <img src={this.props.srcLarge} alt="large variant" />
          </Modal>
        )}
      </li>
    );
  }
}
