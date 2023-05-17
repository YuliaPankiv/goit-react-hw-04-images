import PropTypes from 'prop-types';

import { ImageGalleryList } from './GalleryImage.styled';
import { ImageGalleryItem } from 'components/ItemImageGallery/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(({ webformatURL, largeImageURL, id }) => (
        <ImageGalleryItem
          key={webformatURL}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={id}
        />
      ))}
    </ImageGalleryList>
  );
};
ImageGallery.propType = {
  images: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired.isRequired,
  }).isRequired,
};
