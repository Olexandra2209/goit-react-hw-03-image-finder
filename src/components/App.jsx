import React, { Component } from 'react';
import { fetchImages } from './PixabayAPI';
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
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      })
      .catch(error => console.error('Error fetching images', error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = imageUrl => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    const showLoadMoreButton = images.length > 0 && images.length % 12 === 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onItemClick={this.openModal} />
        {isLoading && <CustomLoader />}
        {showLoadMoreButton && <Button onClick={this.handleLoadMore} />}
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
