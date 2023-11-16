import { useState } from "react";
import { Image, Item } from "./ItemImageGallery.styled";
import { Modal } from "components/Modal/Modal";

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

