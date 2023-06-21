import { ImageGalleryList } from './ImageGallery.styled';
import { ItemImageGallery } from 'components/ItemImageGallery/ItemImageGallery';
import { getImages } from 'services/pixabayAPI';
import Button from 'components/Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ webformatURL, largeImageURL, id, tags }) => (
          <ItemImageGallery
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            key={id}
            tags={tags}
          />
        ))}
      </ImageGalleryList>
    </>
  );
};

export default ImageGallery;
