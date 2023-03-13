import { Component } from 'react';
import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  }
}

export default App;
