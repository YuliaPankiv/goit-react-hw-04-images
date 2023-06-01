import React, { Component } from 'react';
import { AppWrap } from './App.styled';
import Searchbar from '../formSearchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalImages: null,
  };

  changeQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery query={this.state.query} />
      </AppWrap>
    );
  }
}
