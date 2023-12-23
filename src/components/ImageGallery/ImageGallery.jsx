import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './Image.gallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          srcLarge={image.largeImageURL}
          alt={image.tags}
        />
      ))}
    </ul>
  );
};
