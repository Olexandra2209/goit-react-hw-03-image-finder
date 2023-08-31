import React, { Component } from 'react';
import { GrSearch } from 'react-icons/gr';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <Search className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>
              <GrSearch />
            </span>
          </SearchFormButton>

          <SearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Search>
    );
  }
}

export default Searchbar;
