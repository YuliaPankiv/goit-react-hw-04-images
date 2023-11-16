import { useState } from 'react';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import IconButton from 'components/Button/IconButton';
import { toast, ToastContainer } from 'react-toastify';
import { SearchForm, SearchFormInput, SearchFormWrap } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.error('Enter query');
      return;
    }
    onSubmit(input);
    setInput('');
  };
  const handleSearchChange = e => {
    setInput(e.target.value);
  };
  return (
    <SearchFormWrap>
      <SearchForm onSubmit={handleSubmit}>
        <IconButton
          className="SearchForm-button"
          onSubmit={handleSubmit}
          aria-label="search images"
        >
          <SearchSvg />
        </IconButton>

        <SearchFormInput
          type="text"
          placeholder="Search images and photos"
          value={input}
          onChange={handleSearchChange}
        />
      </SearchForm>
      <ToastContainer />
    </SearchFormWrap>
  );
};

export default SearchBar;
