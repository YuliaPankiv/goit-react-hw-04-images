import Modal from 'components/modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img
            className="ImageGalleryItem-image"
            src={this.props.src}
            alt={this.props.tags}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.largeImg} alt={this.props.tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
