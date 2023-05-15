import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

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
          <button
            type="submit"
            className="SearchForm-button"
            onSubmit={this.handleOnSubmit}
          >
            <span className="SearchForm-button-label ">Search</span>
          </button>

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
