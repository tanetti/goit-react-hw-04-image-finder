import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchImages } from 'api/api';
import { MainNotification } from 'components/MainNotification/MainNotification';
import { Loader } from './Loader/Loader';
import { ImageGalleryList } from './ImageGalleryList/ImageGalleryList';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { PER_PAGE } from 'constants/constants';

export const ImageGallery = ({ searchQuery, currentPage, onLoadMore }) => {
  const [galleryData, setGalleryData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchQuery) return;

    setStatus('pending');

    fetchImages(searchQuery, currentPage)
      .then(fetchResult => {
        if (fetchResult.hits.length === 0) return setStatus('empty');

        setGalleryData(prevGalleryData =>
          currentPage === 1
            ? fetchResult.hits
            : [...prevGalleryData, ...fetchResult.hits]
        );
        setTotalResults(fetchResult.totalHits);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [currentPage, searchQuery]);

  if (status === 'idle')
    return <MainNotification notification="Let's find some images" />;

  if (status === 'rejected')
    return <MainNotification notification="Ooops, something went wrong" />;

  if (status === 'empty')
    return <MainNotification notification="No images were found" />;

  if (status === 'pending' && totalResults === 0) return <Loader />;

  if (status === 'resolved' || (status === 'pending' && totalResults > 0)) {
    const forwardHitsCount = totalResults - currentPage * PER_PAGE;

    return (
      <>
        <ImageGalleryList galleryData={galleryData} />
        {forwardHitsCount > 0 && (
          <LoadMoreButton
            title="Load more"
            onLoadMore={onLoadMore}
            status={status}
          />
        )}
      </>
    );
  }
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
