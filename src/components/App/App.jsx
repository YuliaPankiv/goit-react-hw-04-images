import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { AppWrap } from './App.styled';
import Searchbar from '../formSearchbar/Searchbar';
import ImgApi from '../../services/getImages';
import { ImageGallery } from 'components/gallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    totalImages: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ images: [], isLoading: true });
      this.fetchImages(prevState);
    }
  }

  fetchImages = async () => {
    const { query, page, images } = this.state;
    try {
      const res = await ImgApi.getImages(query, page);
      const { hits, total } = res;
      this.setState(prevState => ({
        isLoading: false,
        totalImages: total,
        images: [...prevState.images, ...hits],
      }));

      if (total === 0 && images.length === 0) {
        Notify.info(`No images were found for the query "${query}".`);
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ error, isLoading: false });
    }
  };
  handleSubmitSearchForm = value => {
    this.setState({ query: value, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.fetchImages();
      }
    );
  };

  render() {
    const { images, isLoading, totalImages } = this.state;
    const showLoadMoreButton = images.length > 0 && images.length < totalImages;
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleSubmitSearchForm} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
        {showLoadMoreButton && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </AppWrap>
    );
  }
}
App.propType = {
  value: PropTypes.string.isRequired,
};
