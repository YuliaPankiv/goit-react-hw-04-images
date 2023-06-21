import PropTypes from 'prop-types';
import { Item, Image } from './ItemImageGallery.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ItemImageGallery = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prev => !prev);

  return (
    <Item onClick={toggleModal}>
      <Image className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      {showModal && (
        <Modal closeModal={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </Item>
  );
};
{
  /* ItemImageGallery.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webFormatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
}; */
}
