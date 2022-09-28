import PropTypes from 'prop-types';
import { ImageList } from './ImageGalleryList.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { PER_PAGE } from 'constants/constants';

export const ImageGalleryList = ({ galleryData }) => {
  const firstNewID =
    galleryData[PER_PAGE * (Math.ceil(galleryData.length / PER_PAGE) - 1)].id;

  return (
    <ImageList>
      {galleryData.map(item => (
        <ImageGalleryItem
          key={item.id}
          id={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
          tags={item.tags}
          firstNewID={firstNewID}
        />
      ))}
    </ImageList>
  );
};

ImageGalleryList.propTypes = {
  galleryData: PropTypes.array.isRequired,
};
