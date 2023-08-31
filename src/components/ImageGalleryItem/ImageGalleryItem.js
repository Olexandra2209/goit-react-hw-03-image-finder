import React from 'react';
import { Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onItemClick }) => (
  <li className="gallery-item">
    <Img
      src={image.webformatURL}
      alt=""
      onClick={() => onItemClick(image.largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
