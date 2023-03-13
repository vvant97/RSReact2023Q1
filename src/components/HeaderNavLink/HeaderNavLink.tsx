import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNavLink.scss';

type HeaderNavLinkProps = {
  path: string;
  name: string;
};

class HeaderNavLink extends Component<HeaderNavLinkProps> {
  constructor(props: HeaderNavLinkProps) {
    super(props);
  }

  render() {
    const { path, name } = this.props;

    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'HeaderNavLink active' : 'HeaderNavLink'
        }
      >
        {name}
      </NavLink>
    );
  }
}

export default HeaderNavLink;
