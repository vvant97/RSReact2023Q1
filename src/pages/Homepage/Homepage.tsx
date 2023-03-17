import { Component } from 'react';
import { CardGroup } from '../../components';
import { cardsData } from '../../data/cardsData';

import './Homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <main className="Homepage">
        <div className="container">
          <div className="wrapper">
            <h1 className="title">Homepage</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>

            <CardGroup cards={cardsData} />
          </div>
        </div>
      </main>
    );
  }
}

export default Homepage;
