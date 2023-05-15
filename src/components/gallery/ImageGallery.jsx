import ImageGalleryItem from 'components/ItemImageGallery/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getImages } from 'services/getImages';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const currentValue = this.props.value;
    if (prevValue !== currentValue && currentValue) {
      this.setState({ isLoading: true });
      getImages(currentValue)
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { images, error, isLoading } = this.state;

    // if (status === 'pending') return <Loader />;
    // else if (status === 'fulfilled') {
    //   if (images.length === 0) return <div>No result</div>;
    //   return (
    //     <ul className="ImageGallery">
    //       {images.hits.map(el => (
    //         <ImageGalleryItem
    //           key={el.id}
    //           src={el.webformatURL}
    //           alt={el.user}
    //           onClick={() => this.handleCklickOnImage(el.id)}
    //         />
    //       ))}
    //     </ul>
    //   );
    // } else if (status === 'rejected') return <div>{error}</div>;
    return (
      <>
        {error && <h1>Image is not</h1>}
        {isLoading && <Loader />}
        {images && (
          <>
            <ul className="ImageGallery">
              {images.hits.map(images => (
                <ImageGalleryItem
                  key={images.id}
                  src={images.webformatURL}
                  tags={images.tags}
                  largeImg={images.largeImageURL}
                />
              ))}
            </ul>
            <Button onSubmit={getImages}>Load more</Button>
          </>
        )}
      </>
    );
  }
}
ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
