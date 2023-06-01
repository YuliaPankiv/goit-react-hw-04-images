import React, { Component } from 'react';
import { ImageGalleryList } from './GalleryImage.styled';
import { ImageGalleryItem } from 'components/ItemImageGallery/ImageGalleryItem';
import { getImagesApi } from 'services/getImages';
import Button from 'components/Button/Button';
import { Notify } from 'notiflix';
import Modal from 'components/modal/Modal';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: '',
    isLoading: false,
    page: 1,
    error: null,
    query: '',
    isModalOpen: false,
    showButton: false,
    modalUrl: null,
    alt: null,
    totalImages: null,
  };
  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.query) {
      return { page: 1, query: props.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (
      (prevProps.query !== query && query !== '') ||
      (prevState.page !== page && page !== 1)
    ) {
      this.setGalleryImage();
    }
  }

  setGalleryImage = async () => {
    const { page, query, images } = this.state;

    this.setState({ isLoading: true, error: null });

    try {
      const data = await getImagesApi(query, page);
      const { total } = data;
      const countPage = Math.ceil(total / 12);

      if (data.hits.length === 0) {
        throw new Error(`No images were found for the query "${query}".`);
      }
      this.setState(prev => ({
        images: page === 1 ? data.hits : [...prev.images, ...data.hits],
        showButton: false,
        totalImages: total,
      }));
      if (images.length > 0 && images.length < total && countPage !== page) {
        this.setState({ showButton: true });
      } else {
        this.setState({ showButton: false });
      }
    } catch (error) {
      this.setState({ error: `no image with name ${query}` });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  openModal = ({ largeImageURL, id }) => {
    this.setState({ isModalOpen: true, modalUrl: largeImageURL, alt: id });
  };
  toggleModal = () => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
  };
  render() {
    const { images, isLoading, error, isModalOpen, modalUrl, alt, showButton } =
      this.state;
    return (
      <>
        {isLoading && <Loader />}
        {error ? (
          Notify.info(error)
        ) : (
          <>
            {images.length !== 0 && (
              <ImageGalleryList>
                <ImageGalleryItem images={images} openModal={this.openModal} />
              </ImageGalleryList>
            )}

            {!isLoading && showButton && (
              <Button onClick={this.changePage}>Load more</Button>
            )}
            {isModalOpen && (
              <Modal onClose={this.toggleModal}>
                <img src={modalUrl} alt={alt} />
              </Modal>
            )}
          </>
        )}
      </>
    );
  }
}

export { ImageGallery };
