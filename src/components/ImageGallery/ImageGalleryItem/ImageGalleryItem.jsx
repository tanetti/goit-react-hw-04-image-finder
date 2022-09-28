import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({
  id,
  smallImage,
  largeImage,
  tags,
  firstNewID,
}) => {
  const [shouldModalShown, setShouldModalShown] = useState(false);
  const firstNewRef = useRef(null);

  const toggleModal = () => {
    if (onkeydown) onkeydown = null;

    setShouldModalShown(prevShouldModalShown => !prevShouldModalShown);
  };

  const scrollToFirstNewImage = () => {
    const firstNewElementTop = firstNewRef.current.offsetTop - 81;

    window.scroll({ top: firstNewElementTop, behavior: 'smooth' });
  };

  return (
    <GalleryItem>
      <GalleryImage
        src={smallImage}
        alt={tags}
        onClick={toggleModal}
        ref={id === firstNewID ? firstNewRef : null}
        onLoad={id === firstNewID ? scrollToFirstNewImage : null}
      />
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
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  firstNewID: PropTypes.number.isRequired,
};
