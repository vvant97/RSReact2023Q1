import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs, Homepage, NotFound } from '../pages';

import App from '../App';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
