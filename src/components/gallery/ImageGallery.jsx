import ImageGalleryItem from 'components/ItemImageGallery/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getImages } from 'services/getImages';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    page: 1,
    showButton:false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const currentValue = this.props.value;
    const currentPage = this.state.page;

    if (prevValue !== currentValue && currentValue) {
      this.setState({ isLoading: true, images: null });
      getImages(currentValue, currentPage)
        .then(images => {
          if (images.totalHits === 0) {
            return Notify.info(`No image found for ${currentValue}!`);
          }
          return this.setState({ images , showButton:true});
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    const { images, error, isLoading } = this.state;
    const imageSize = isLoading ? '100%' : 0;

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
        {error && <h1>{error.message}</h1>}
        {isLoading && <Loader />}
        {images && (
          <>
            <ul className="ImageGallery">
              {images.hits.map(images => (
                <ImageGalleryItem
                  key={images.id}
                  width={imageSize}
                  height={imageSize}
                  src={images.webformatURL}
                  tags={images.tags}
                  largeImg={images.largeImageURL}
                />
              ))}
            </ul>
            {this.state.images.length < this.state.totalHits && (
          <Button loadMore={this.handleChangePage} />
        )}          </>
        )}
        {}
      </>
    );
  }
}
ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
