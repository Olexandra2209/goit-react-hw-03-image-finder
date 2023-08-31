import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallary } from './ImageGallery.styled';

const ImageGallery = ({ images, onItemClick }) => (
  <Gallary className="gallery">
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onItemClick={onItemClick}
      />
    ))}
  </Gallary>
);

export default ImageGallery;
