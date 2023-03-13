import { Component } from 'react';
import { HeaderNavLink } from '../index';

import './NavBar.scss';

type Route = {
  id: number;
  path: string;
  name: string;
};

type NavBarProps = {
  routes: Route[];
};

class NavBar extends Component<NavBarProps> {
  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    const { routes } = this.props;

    return (
      <nav>
        <ul className="NavBar-list">
          {routes.map((route) => {
            return (
              <li key={route.id}>
                <HeaderNavLink {...route} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
