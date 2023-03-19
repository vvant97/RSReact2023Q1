import { ChangeEvent, Component } from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';
import { Input } from '../index';

import './Search.scss';

type SearchState = {
  searchValue: string;
};

class Search extends Component<object, SearchState> {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    const cachedSearch = window.localStorage.getItem('search') || '';
    this.setState({ searchValue: cachedSearch });
  }

  componentWillUnmount() {
    const { searchValue } = this.state;
    window.localStorage.setItem('search', searchValue);
  }

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="Search">
        <label htmlFor="search">
          <SearchIcon className="SearchIcon" />
        </label>

        <Input
          type="text"
          placeholder="Search..."
          id="search"
          value={searchValue}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default Search;
