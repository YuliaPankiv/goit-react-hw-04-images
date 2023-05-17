import Modal from 'components/modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItemWrap,
} from './ImageGalleryItemWrap.styled';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    const { webformatURL, largeImageURL, id } = this.props;
    return (
      <>
        <ImageGalleryItemWrap key={webformatURL}>
          <ImageGalleryItemImage
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt={id}
            onClick={this.openModal}
          />
        </ImageGalleryItemWrap>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={id} />
          </Modal>
        )}
      </>
    );
  }
}
ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired.isRequired,
};
