import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchByQyery } from 'service/api';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
    query: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      try {
        fetchByQyery(this.state.query, this.state.page).then(images => {
          this.setState(prevState => {
            return { images: [...prevState.images, ...images] };
          });
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = async ev => {
    ev.preventDefault();
    const query = ev.currentTarget.query.value;
    this.setState({ query: query, page: 1, images: [], isLoading: true });
  };

  handleLoadMore = async () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, isLoading: true };
    });
  };
  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        {this.state.images.length > 0 && (
          <div>
            <ImageGallery images={this.state.images} />
            <Button handleLoadMore={this.handleLoadMore} />
          </div>
        )}
      </div>
    );
  }
}
