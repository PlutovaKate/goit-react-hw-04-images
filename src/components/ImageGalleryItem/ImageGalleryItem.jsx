import { React, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={toggleModal}
        ></img>
      </li>

      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal}>
          <img src={largeImageURL} alt="largeImage" />
        </Modal>
      )}
    </div>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
