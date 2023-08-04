import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL } = this.props;
    return (
      <div>
        <li className={css.imageGalleryItem}>
          <img
            className={css.imageGalleryItemImage}
            src={webformatURL}
            alt=""
            onClick={this.toggleModal}
          ></img>
        </li>

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal}>
            <img src={largeImageURL} alt="largeImage" />
          </Modal>
        )}
      </div>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
