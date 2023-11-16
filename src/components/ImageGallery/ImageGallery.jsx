import 'react-toastify/dist/ReactToastify.css';
import { ImageGalleryList } from './ImageGallery.styled';
import { ItemImageGallery } from 'components/ItemImageGallery/ItemImageGallery';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ webformatURL, largeImageURL, id, tags }) => (
          <ItemImageGallery
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            key={id}
            tags={tags}
          />
        ))}
      </ImageGalleryList>
    </>
  );
};

export default ImageGallery;
