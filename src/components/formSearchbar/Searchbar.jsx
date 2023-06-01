import React, { Component } from 'react';
import { ReactComponent as SearchSvg } from '../../assets/search.svg';
import IconButton from 'components/Button/IconButton';
import {
  SearchForm,
  SearchFormInput,
  SearchFormWrap,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };
  handleSearchChange = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <SearchFormWrap>
        <SearchForm onSubmit={this.handleSubmit}>
          <IconButton
            className="SearchForm-button"
            onSubmit={this.handleSubmit}
            aria-label="search images"
          >
            <SearchSvg />
          </IconButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleSearchChange}
          />
        </SearchForm>
      </SearchFormWrap>
    );
  }
}
export default Searchbar;
