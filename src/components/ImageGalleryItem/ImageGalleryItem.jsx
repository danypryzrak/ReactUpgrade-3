import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toogleModal = () => {
    this.setState(prevState => {
      return { isShowModal: !prevState.isShowModal };
    });
  };
  render() {
    return (
      <li className={css.galleryItem}>
        <img className={css.image} src={this.props.src} alt={this.props.alt} />
      </li>
    );
  }
}
