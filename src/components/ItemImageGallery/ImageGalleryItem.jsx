import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItemWrap,
} from './ImageGalleryItemWrap.styled';

export const ImageGalleryItem = ({ images, openModal }) => {
  if (images.length > 0) {
    return images.map(({ webformatURL, largeImageURL, id }) => {
      return (
        <ImageGalleryItemWrap
          key={id}
          onClick={() => openModal({ id, largeImageURL })}
        >
          <ImageGalleryItemImage
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={id}
          />
        </ImageGalleryItemWrap>
      );
    });
  }
};
ImageGalleryItem.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webFormatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
