import { ChangeEvent, Component } from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';

import './Search.scss';

type SearchState = {
  value: string;
};

class Search extends Component<object, SearchState> {
  state = {
    value: '',
  };

  componentDidMount() {
    const cachedSearch = window.localStorage.getItem('search') || '';
    this.setState({ value: cachedSearch });
  }

  componentWillUnmount() {
    const { value } = this.state;
    window.localStorage.setItem('search', value);
  }

  handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ value });
  };

  render() {
    return (
      <div className="Search">
        <label htmlFor="search">
          <SearchIcon className="SearchIcon" />
        </label>

        <input
          type="text"
          placeholder="Search..."
          id="search"
          value={this.state.value}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default Search;
