import { Component } from 'react';
import { Search, NavBar } from '../../components';

import './Header.scss';

const routes = [
  { id: 1, path: '/', name: 'Homepage' },
  { id: 2, path: 'about-us', name: 'About us' },
  { id: 3, path: 'not-found', name: 'Not found' },
];

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <NavBar routes={routes} />
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;
