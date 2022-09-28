import PropTypes from 'prop-types';
import { useState } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ smallImage, largeImage, tags }) => {
  const [shouldModalShown, setShouldModalShown] = useState(false);

  const toggleModal = () => {
    if (onkeydown) onkeydown = null;

    setShouldModalShown(prevShouldModalShown => !prevShouldModalShown);
  };

  return (
    <GalleryItem>
      <GalleryImage src={smallImage} alt={tags} onClick={toggleModal} />
      {shouldModalShown ? (
        <Modal
          modalImageToShow={largeImage}
          modalImageAlt={tags}
          onClose={toggleModal}
        />
      ) : null}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
