import React, { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { showModal, imageUrl } = this.props;

    return (
      showModal && (
        <Overlay onClick={this.handleOverlayClick}>
          <ModalContainer>
            <img src={imageUrl} alt="" />
          </ModalContainer>
        </Overlay>
      )
    );
  }
}

export default Modal;
