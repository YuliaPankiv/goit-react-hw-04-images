import React, { useState } from 'react';
import { AppWrap } from './App.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { useEffect } from 'react';
import { fetchApi, getImages } from 'services/pixabayAPI';
import { toast, ToastContainer } from 'react-toastify';
import { getNormalizeImages } from 'helpers/normalizeImages';
import Loader from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchApi(searchQuery, page)
      .then(({hits, totalHits}) => {
        setImages(prevImages => [...prevImages, ...getNormalizeImages(hits)]);
        setTotalHits(totalHits);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery, page]);

  const handleSubmitForm = query => {
    if (searchQuery === query) {
      return;
    }
    setImages([]);
    setPage(1);
    setLoading(true);
    setSearchQuery(query);
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
  };
  // const handleClick = () => setPage(prev => prev + 1);
  return (
    <AppWrap>
      <SearchBar onSubmit={handleSubmitForm} />
      <ToastContainer />
      {loading && <Loader />}
      {error && (
        <h1 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h1>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && images.length !== totalHits && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </AppWrap>
  );
};
