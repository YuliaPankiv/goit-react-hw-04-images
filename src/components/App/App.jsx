import React, { Component } from 'react';
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
    showLoadMoreButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      this.fetchImages(prevState);
    }
  }

  fetchImages = async () => {
    const { query, page, images, isLoading } = this.state;
    try {
      const res = await ImgApi.getImages(query, page);
      const { hits, total } = res;
      const countPage = Math.ceil(total / 12);

      this.setState(prevState => ({
        isLoading: false,
        totalImages: total,
        images: [...prevState.images, ...hits],
      }));

      if (total === 0 && images.length === 0) {
        Notify.info(`No images were found for the query "${query}".`);
      }
      if (
        hits.length > 0 &&
        hits.length < total &&
        !isLoading &&
        countPage !== page
      ) {
        this.setState({ showLoadMoreButton: true });
      } else {
        this.setState({ showLoadMoreButton: false });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ error, isLoading: false });
    }
  };

  handleSubmitSearchForm = value => {
    this.setState({ images: [], query: value, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, showLoadMoreButton } = this.state;
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleSubmitSearchForm} />
        {isLoading && <Loader />}

        {images.length > 0 && <ImageGallery images={images} />}
        {showLoadMoreButton && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
      </AppWrap>
    );
  }
}
