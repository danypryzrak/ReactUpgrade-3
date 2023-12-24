import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ src, srcLarge, alt }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <li className={css.galleryItem}>
      <img className={css.image} src={src} alt={alt} onClick={toggleModal} />
      {isShowModal && (
        <Modal toggleModal={toggleModal} closeModal={closeModal}>
          <img src={srcLarge} alt="large" />
        </Modal>
      )}
    </li>
  );
};
