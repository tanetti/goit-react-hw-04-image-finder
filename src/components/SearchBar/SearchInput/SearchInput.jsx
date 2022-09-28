import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { StyledInput } from './SerchInput.styled';

export const SearchInput = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onChange(searchQuery);
  }, [searchQuery, onChange]);

  const onQueryChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <StyledInput
      type="text"
      autoFocus
      placeholder="Search images and photos"
      value={searchQuery}
      onChange={onQueryChange}
    />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
