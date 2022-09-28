import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyledSearchForm } from './SearchForm.styled';
import { SearchButton } from '../SearchButton/SearchButton';
import { SearchInput } from '../SearchInput/SearchInput';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = inputSearchQuery => {
    setSearchQuery(inputSearchQuery);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchQuery);
  };

  return (
    <StyledSearchForm onSubmit={onFormSubmit} autoComplete="off">
      <SearchButton />
      <SearchInput onChange={onInputChange} />
    </StyledSearchForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
