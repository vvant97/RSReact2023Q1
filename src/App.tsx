import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './layouts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
