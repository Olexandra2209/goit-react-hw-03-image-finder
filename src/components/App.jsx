import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import CustomLoader from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;

    const apiKey = '38287745-8ae9b1f5cab082762fa8c0628';

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images', error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  openModal = imageUrl => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onItemClick={this.openModal} />
        {isLoading && <CustomLoader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal
            showModal={showModal}
            imageUrl={selectedImage}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
