import { GlobalStyles } from 'components/GlobalStyles';
import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const onSearchSubmit = formSearchQuery => {
    const formatedSearchQuery = formSearchQuery.trim().toLowerCase();

    if (!formatedSearchQuery || searchQuery === formatedSearchQuery) return;

    setSearchQuery(formatedSearchQuery);
    setCurrentPage(1);
  };

  const onLoadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  return (
    <>
      <GlobalStyles />
      <SearchBar onSubmit={onSearchSubmit} />
      <main>
        <ImageGallery
          searchQuery={searchQuery}
          currentPage={currentPage}
          onLoadMore={onLoadMore}
        />
      </main>
    </>
  );
};
