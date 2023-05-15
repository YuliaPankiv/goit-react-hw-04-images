import React, { Component } from 'react';
import Searchbar from './formSearchbar/Searchbar';
import ImageGallery from './gallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = search => {
    this.setState({ searchValue: search });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery value={searchValue} />
      </div>
    );
  }
}
