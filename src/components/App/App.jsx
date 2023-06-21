import React, { Component, useState } from 'react';
import { AppWrap } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { useEffect } from 'react';
import { getImages } from 'services/pixabayAPI';
import { toast, ToastContainer } from 'react-toastify';
import { getNormalizeImages } from 'helpers/normalizeImages';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const changeQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  useEffect(() => {
    if (query === '') {
      return;
    }

    const setGalleryImage = async () => {
      setStatus(Status.PENDING);
      setShowButton(false);
      setError(null);
      try {
        const { hits, totalHits } = await getImages(query, page);
        const maxPage = Math.ceil(totalHits / 12);

        if (hits.length === 0) {
          toast(`No images were found for the query "${query}".`);
          return;
        }
        setImages(prevImages => [...prevImages, ...getNormalizeImages(hits)]);

        setStatus(Status.RESOLVED);
        setShowButton(page < maxPage);
      } catch (err) {
        setStatus(Status.REJECTED);
        setError(err.message);
      }
    };
    setGalleryImage();
  }, [page, query]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleClick = () => setPage(prev => prev + 1);
  return (
    <AppWrap>
      <Searchbar onSubmit={changeQuery} />
      {images.length > 0 && <ImageGallery images={images} />} <ToastContainer />
      {showButton && <Button onClick={handleClick}>Load More</Button>}
      {status === Status.PENDING && <Loader />}
      <ToastContainer />
    </AppWrap>
  );
};
