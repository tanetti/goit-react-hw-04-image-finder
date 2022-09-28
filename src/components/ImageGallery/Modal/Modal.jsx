import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ modalImageToShow, modalImageAlt, onClose }) => {
  onkeydown = evt => {
    if (evt.code !== 'Escape') return;

    onClose();
  };

  const onOverlayClick = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;

    onClose();
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
        <img src={modalImageToShow} alt={modalImageAlt} />
      </ModalWindow>
    </Overlay>,
    document.querySelector('#portal')
  );
};

Modal.propTypes = {
  modalImageToShow: PropTypes.string.isRequired,
  modalImageAlt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
