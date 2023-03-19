import { Component } from 'react';
import { Link } from 'react-router-dom';
import { FcQuestions as NotFoundIcon } from 'react-icons/fc';

import './NotFound.scss';

class NotFound extends Component {
  render() {
    return (
      <main className="NotFound">
        <div className="container">
          <NotFoundIcon className="NotFoundIcon" />
          <h1 className="NotFound-title">
            The page you are looking for is not exist
          </h1>

          <Link className="NotFound-link" to="/">
            Go to homepage
          </Link>
        </div>
      </main>
    );
  }
}

export default NotFound;
