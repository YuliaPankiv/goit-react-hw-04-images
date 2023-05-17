import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ReactComponent as SearchSvg } from '../icons/search.svg';
import IconButton from 'components/Button/IconButton';
import {
  SearchForm,
  SearchFormInput,
  SearchFormWrap,
} from './Searchbar.styled';
export default class Searchbar extends Component {
  state = {
    search: '',
  };
  handleSearchChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      Notify.info('The input field is empty!');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <SearchFormWrap>
        <SearchForm onSubmit={this.handleOnSubmit}>
          <IconButton
            className="SearchForm-button"
            onSubmit={this.handleOnSubmit}
            aria-label="search images"
          >
            <SearchSvg />
          </IconButton>

          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </SearchForm>
      </SearchFormWrap>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
