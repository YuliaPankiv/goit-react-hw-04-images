import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { AppWrap } from './App.styled';
import Searchbar from '../formSearchbar/Searchbar';
import { getImagesApi } from '../../services/getImages';
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
  // static getDerivedStateFromProps() {
  //   if (this.state.query !== this.props.query) {
  //     return this.setState({ page: 1, query: this.props.query });
  //   }
  //   return null;
  // }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ error: null });
      this.fetchImages(prevState);
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true, error: null });

    try {
      const res = await getImagesApi(query, page);
      const { hits, total } = res;
      const countPage = Math.ceil(total / 12);

      if (hits.length === 0) {
        throw new Error(`No images were found for the query "${query}".`);
      }
      this.setState(prevState => ({
        totalImages: total,
        showLoadMoreButton: false,
        images: page === 1 ? res.hits : [...prevState.images, ...hits],
      }));

      if (hits.length > 0 && hits.length < total && countPage !== page) {
        this.setState({ showLoadMoreButton: true });
      } else {
        this.setState({ showLoadMoreButton: false });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmitSearchForm = value => {
    this.setState({ images: [], query: value, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, showLoadMoreButton, error } = this.state;
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleSubmitSearchForm} />
        {error ? (
          Notify.info(error)
        ) : (
          <>
            {images.length > 0 && <ImageGallery images={images} />}
            {isLoading && <Loader />}

            {!isLoading && showLoadMoreButton && (
              <Button onClick={this.handleLoadMore}>Load more</Button>
            )}
          </>
        )}
      </AppWrap>
    );
  }
}
