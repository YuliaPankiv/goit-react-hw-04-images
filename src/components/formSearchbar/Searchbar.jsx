import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as SearchSvg } from '../icons/search.svg';
import IconButton from 'components/Button/IconButton';
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
      alert('please write your fetch');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <IconButton
            className="SearchForm-button"
            onSubmit={this.handleOnSubmit}
            aria-label="search images"
          >
            <SearchSvg />
            {/* <span className="SearchForm-button-label "></span> */}
          </IconButton>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
